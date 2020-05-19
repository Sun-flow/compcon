class SpecialAdvance {
    private _id: string
    protected type: SpecAdvanceType
    private _name: string
    private _label: string
    private _advance_name: string
    private _advance_note: string
    private _description: string

    public constructor(data: ISpecAdvanceData) {
        this._id = data.id
        this.type = (data.type as SpecAdvanceType)
        this._name = data.name || ''
        this._label = data.label || ''
        this._advance_name = data.advance_name || ''
        this._advance_note = data.advance_note || ''
        this._description = data.description || ''
    }

    protected save(): void {
        store.dispatch('saveData')
    }

    public get ID(): string{
        return this._id
    }

    public get Type(): SpecAdvanceType {
        return this.type
    }

    public get Name(): string {
        return this._name
    }

    public set Name(n: string) {
        this._name = n
    }


}

export default SpecAdvance