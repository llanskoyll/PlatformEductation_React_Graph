import {makeAutoObservable} from "mobx";

export default class SemesterStore {
    constructor() {
        this._semesters = 0
        this._allDisciplines = undefined
        this._Discipline = undefined
        this._SelectedSemesters = {}
        this._IndexSemester = 0
        makeAutoObservable(this)
    }


    //
    setSemesters(types) {
        this._semesters = types
    }
    setAllDisciplines(types) {
        this._allDisciplines = types
    }
    setSelectedSemesters(type) {
        this._SelectedSemesters = type
    }
    setIndexSemester(type) {
        this._IndexSemester = type
    }
    setDiscipline(type) {
        this._Discipline = type
    }


    //
    get Semesters() {
        return this._semesters
    }
    get AllDisciplines() {
        return this._allDisciplines
    }
    get selectedSemesters() {
        return this._SelectedSemesters
    }
    get IndexSemester(){
        return this._IndexSemester
    }
    get Discipline() {
        return this._Discipline
    }
}