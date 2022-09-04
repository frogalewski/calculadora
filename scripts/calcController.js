class CalcController {

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        
    }

    initialize(){

        

        this._dateEl.innerHTML = "03/09/2022";
        this._timeElinnerHTML = "13:12";
    }

    get displayCalc(){

        return this._displayCalc.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalc.innerHTML;
    }

    get _currentDate(){
        return this._currentDate
    }

    set currentDate(valor){
        this.currentDate = valor
    }
}