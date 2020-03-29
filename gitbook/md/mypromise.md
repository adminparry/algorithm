``` javascript
const isFunction = variable => typeof variable == 'function';
const pending = 0;
const fulfill = 1;
const reject = 2;

class MyPromise {
    constructor(fun){
        if(!isFunction(fun)){
            throw new Error('parameter is must be a function')
        }
        this.value;
        this.status = pending;
        this.fulfillQueue = [];
        this.rejectQueue = [];

        try{
            fun(this._resolve.bind(this), this._reject.bind(this));
        }catch(e){
            this._reject(e)
        }
    }
    _resolve(value){
        const run = () => {
            if(this.status != pending)return;
            this.status = fulfill;
            let fulfilled,rejected;
            fulfilled = (val) => {
                let cb;
                while(cb = this.fulfillQueue.shift()){
                    cb(val)
                }
            }
            rejected = (err) =>{
                let cb;
                while(cb = this.rejectQueue.shift()){
                    cb(err)
                }
            }
            if(value instanceof MyPromise){
                value.then(val => {
                    this.value = val;
                    fulfilled(val)
                }, err => {
                    this.value = err;
                    rejected(err)
                });
            }else{
                this.value = value;
                fulfilled(value)
            }
        }
        setTimeout(run, 0)
    }
    _reject(error){
        const run = () =>{
            if(this.status != pending)return;
            this.status = reject;
            let cb;
            while(cb = this.rejectQueue.shift()){
                cb(err)
            }
        }
        setTimeout(run, 0)
    }
    then(onFulfill, onReject){
        const { status, value } = this;
        return new MyPromise((fulfillNext, rejectNext) => {
            let fulfilled,rejected;
            fulfilled = (val) => {
                try{
                    if(isFunction(onFulfill)){
                        onFulfill(val)
                    }else{
                        let res = onFulfill(val);
                        if(res instanceof MyPromise){
                            res.then(fulfillNext, rejectNext)
                        }else{
                            fulfillNext(res)
                        }
                    }
                }catch(e){
                    rejectNext(e)
                }
            }
            rejected = (err) => {
                try{
                    if(isFunction(onReject)){
                        onReject(err)
                    }else{
                        let res = onReject(err);
                        if(res instanceof MyPromise){
                            res.then(fulfillNext, rejectNext)
                        }else{
                            fulfillNext(res)
                        }
                    }
                }catch(e){
                    rejectNext(e)
                }
            }
            switch(status){
                case pending:
                    this.fulfillQueue.push(fulfilled);
                    this.rejectQueue.push(rejected);
                    break;
                case reject:
                    this.rejected(value);
                    break;
                case fulfill:
                    this.fulfilled(value);
                    break;
                    
            }
        })
    }   
}
```