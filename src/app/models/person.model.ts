import { PersonOccupationResultModel } from "./person-occupation-result.model";
import { Person10Model } from "./person-10.model";
import { PersonResultModel } from "./person-result.model";

export interface PersonModel {
  id: number,
  name: string,
  department: string,
  fileId: string,
  personResult: PersonResultModel,
  person10Result: Person10Model,
  personOccupationResult: PersonOccupationResultModel
}
