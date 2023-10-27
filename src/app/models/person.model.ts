import { OccupationResultModel } from "./occupation-result.model";
import { Person10Model } from "./person-10.model";
import { PersonResultModel } from "./person-result.model";

export interface PersonModel {
  id: number,
  name: string,
  occupation: string,
  personResult: PersonResultModel,
  person10Result: Person10Model,
  occupationResult: OccupationResultModel
}
