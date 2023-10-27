import { Injectable } from "@angular/core";

import { PersonModel } from "../models/person.model";
import { PersonResultModel } from "../models/person-result.model";
import { Person10Model } from "../models/person-10.model";
import { OccupationResultModel } from "../models/occupation-result.model";

import { PersonService } from "../services/person.service";

@Injectable({
  providedIn: 'root'
})
export class PersonFunction {

  private personsList: PersonModel[] = [];
  private personList: any[] = [];
  private personResultList: any[] = [];
  private person10ResultList: any[] = [];
  private occupationResultList: any[] = [];

  constructor(
    private _PersonService: PersonService
  ) {

  }

  getPersonsList(): PersonModel[] {
    return this.personsList;
  }

  buildPersonsList() {
    for (let i = 0; i < this.personList.length; i++) {
      const person = this.personList[i];
      const _person: PersonModel = <PersonModel>{};
      _person.id = person["id"];
      _person.name = person["ad soyad"];
      _person.occupation = person["meslek"];


      // Person Result
      const personResult = this.personResultList.find(prl => prl["id"] == _person.id && prl["ad soyad"] == _person.name);
      const _personResult: PersonResultModel = <PersonResultModel> {};
      _personResult.gorselHafiza = personResult["görsel hafıza"];
      _personResult.gorselIsleyenHafiza = personResult["görsel işleyen hafıza"];
      _personResult.gozIzleme = personResult["göz izleme"];
      _personResult.mekansalTahmin = personResult["mekansal tahmin"];
      _personResult.mantikYurutme = personResult["mantık yürütme"];
      _personResult.uzamsalMantikYurutme = personResult["uzamsal mantık yürütme"];
      _personResult.isitselHafiza = personResult["işitsel hafıza"];
      _personResult.isitselIsleyenHafiza = personResult["işitsel işleyen hafıza"];
      _personResult.kelimeAyirtEtme = personResult["kelime ayırt etme"];
      _personResult.sesAyirtEtme = personResult["ses ayırt etme"];
      _personResult.dilCalismaBellegi = personResult["dil çalışma belleği"];
      _personResult.kelimeIliskilendirme = personResult["kelime ilişkilendirme"];
      _personResult.gorselDikkat = personResult["görsel dikkat"];
      _personResult.gorselDurtuKontrolu = personResult["görsel dürtü kontrolü"];
      _personResult.isitselDikkat = personResult["işitsel dikkat"];
      _personResult.isitselDurtuKontolü = personResult["işitsel dürtü kontrolü"];
      _personResult.ikiliGorselDikkat = personResult["ikili görsel dikkat"];
      _personResult.ikiliIsitselDikkat = personResult["ikili işitsel dikkat"];
      _personResult.ikiliGorselDurtuKontrolu = personResult["ikili görsel dürtü kontrolü"];
      _personResult.ikiliIsitselDurtuKontolu = personResult["ikili işitsel dürtü kontrolü"];
      _personResult.islemHizi = personResult["işlem hızı"];
      _personResult.bilisselEsneklik = personResult["bilişsel esneklik"];
      _personResult.algisalHiz = personResult["algısal hız"];
      _personResult.gorselIsleyenHafiza = personResult["görsel işleyen hafıza"];
      _personResult.buyumeZihniyeti = personResult["büyüme zihniyeti"];
      _personResult.duygusalDuzenleme = personResult["duygusal düzenleme"];
      _personResult.ozYonetim = personResult["öz yönetim"];
      _personResult.sosyalYonetim = personResult["sosyal yönetim"];
      _personResult.duyguTanima = personResult["duygu tanıma"];
      _personResult.zihinOrtalamasi = personResult["zihin ortalaması"];

      _person.personResult = _personResult;

      // Person 10 Result
      const person10Result = this.person10ResultList.find(p10rl => p10rl["id"] == _person.id && p10rl["ad soyad"] == _person.name);
      const _person10Result: Person10Model = <Person10Model> {};
      _person10Result.yonetim = person10Result["yönetim"];
      _person10Result.dikkatVeSurdurebilme = person10Result["dikkat ve sürdürebilme"];
      _person10Result.etkinIletisim = person10Result["etkin iletişim"];
      _person10Result.isDisiplini = person10Result["iş disiplini"];
      _person10Result.adaptasyon = person10Result["adaptasyon"];
      _person10Result.kariyerGelisimi = person10Result["kariyer gelişimi"];
      _person10Result.ozYonetim = person10Result["öz yönetim"];
      _person10Result.problemCozme = person10Result["problem çözme"];
      _person10Result.yabanciDilKullanma = person10Result["yabancı dil kullanma"];
      _person10Result.okumaAnlama = person10Result["okuma anlama"];

      _person.person10Result = _person10Result;

      // Occupation Result
      const occupationResult = this.occupationResultList.find(orl => orl["id"] == _person.id && orl["ad soyad"] == _person.name);
      const _occupationResult: OccupationResultModel = <OccupationResultModel>{};
      _occupationResult.muhasebe = occupationResult["muhasebe"];
      _occupationResult.finans = occupationResult["finans"];
      _occupationResult.idariIsler = occupationResult["idari işler"];
      _occupationResult.arge = occupationResult["arge"];
      _occupationResult.itBilisim = occupationResult["IT-Bilişim"];
      _occupationResult.ik = occupationResult["insan kaynakları"];
      _occupationResult.satinAlma = occupationResult["satın alma"];
      _occupationResult.pazarlama = occupationResult["pazarlama"];
      _occupationResult.satis = occupationResult["satış"];
      _occupationResult.uretimBeyazYaka = occupationResult["üretim-beyaz yaka"];
      _occupationResult.uretimMaviYaka = occupationResult["üretim-mavi yaka"];
      _occupationResult.kaliteGuvence = occupationResult["kalite güvence"];
      _occupationResult.kaliteKontrol = occupationResult["kalite kontrol"];
      _occupationResult.depo = occupationResult["depo"];
      _occupationResult.sevkiyatLojistik = occupationResult["sevkiyat-lojistik"];
      _occupationResult.halklaIliskiler = occupationResult["halkla ilişkiler"];
      _occupationResult.hukuk = occupationResult["hukuk"];
      _occupationResult.reklamSosyalMedya = occupationResult["reklam ve sosyal medya"];
      _occupationResult.uretimPlanlama = occupationResult["üretim planlama"];
      _occupationResult.bakimOnarim = occupationResult["bakım onarım"];
      _occupationResult.ustYonetim = occupationResult["üst yönetim"];

      _person.occupationResult = _occupationResult;

      // Fill personsList
      this.personsList.push(_person);
    }

    this._PersonService.setPersonsList(this.personsList);
  }

  setPersonList(personListJSON: any[]) {
    this.personList = personListJSON;
  }

  setPersonResultList(personListJSON: any[]) {
    this.personResultList = personListJSON;
  }

  setPerson10ResultList(person10ResultJSON: any[]) {
    this.person10ResultList = person10ResultJSON;
  }

  setOccupationResultList(occupationResultJSON: any[]) {
    this.occupationResultList = occupationResultJSON;
  }

  createPerson(person: PersonModel) {
    this._PersonService.createPerson(person);
  }

  updatePerson(person: PersonModel) {
    this._PersonService.updatePerson(person);
  }

  deletePerson(person: PersonModel) {
    this._PersonService.deletePerson(person);
  }

}
