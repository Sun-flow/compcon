class SpecialAdvance {
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


    public static Serialize(reserve: Reserve): IReserveData {
      return {
        id: reserve.ID,
        type: reserve.type,
        name: reserve.Name,
        label: reserve._label,
        description: reserve.Description,
        resource_name: reserve.ResourceName,
        resource_note: reserve.Note,
        resource_cost: reserve.ResourceCost,
        used: reserve.Used,
      }
    }

    public static Deserialize(rData: IReserveData): Reserve {
      let data = reserves.find(x => x.id === rData.id)
      if (!data)
        data = {
          id: rData.id,
          type: rData.type,
          name: rData.name,
          label: rData.label,
          description: rData.description,
        }
      const r = new Reserve(data)
      r._resource_name = rData.resource_name
      r._resource_note = rData.resource_note
      r._resource_cost = rData.resource_cost
      r._used = rData.used
      return r
    }

}

export default SpecAdvance