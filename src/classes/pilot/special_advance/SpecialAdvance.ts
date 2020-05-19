import { store } from '@/store'
import { SpecialAdvanceType } from '@/class'
import { special_advances } from 'lancer-data'

class SpecialAdvance{
    protected type: SpecialAdvanceType
    private _name: string
    private _description: string

    public get Type(): SpecialAdvanceType {
      return this.type
    }

    public get Name(): string {
      return this._name
    }

    public get Description(): string {
      return this._description
    }

    public constructor(data: ISpecialAdvanceData) {
        this._type = (data.type as SpecialAdvanceType) || SpecialAdvanceType.Skill
        this._name = data.name || ''
        this._description = data.description || ''
    }

    protected save(): void {
        store.dispatch('saveData')
    }

    public static Serialize(special_advance: SpecialAdvance): ISpecialAdvanceData {
      return {
        type: special_advance.Type,
        name: special_advance.Name,
        description: special_advance.Description,
      }
    }

    public static Deserialize(sData: ISpecialAdvanceData): SpecialAdvance {
      let data = special_advances.find(x => x.type === sData.type)
      if (!data)
        data = {
          type: sData.type,
          name: sData.name,
          description: sData.description,
        }
      const s = new SpecialAdvance(data)
      return s
    }

}

export default SpecialAdvance
