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
  private companyName: string = '';
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
      _person.id = person["ID"];
      _person.name = person["Ad Soyad"];
      _person.occupation = person["Meslek"];
      _person.company = this.getCompanyName();


      // Person Result
      const personResult = this.personResultList.find(prl => prl["ID"] == _person.id && prl["Ad Soyad"] == _person.name);
      const _personResult: PersonResultModel = <PersonResultModel> {};
      _personResult.gorselHafiza = personResult["Görsel Hafıza"];
      _personResult.gorselIsleyenHafiza = personResult["Görsel İşleyen Hafıza"];
      _personResult.gozIzleme = personResult["Göz İzleme"];
      _personResult.mekansalTahmin = personResult["Mekansal Tahmin"];
      _personResult.mantikYurutme = personResult["Mantık Yürütme"];
      _personResult.uzamsalMantikYurutme = personResult["Uzamsal Mantık Yürütme"];
      _personResult.isitselHafiza = personResult["İşitsel Hafıza"];
      _personResult.isitselIsleyenHafiza = personResult["İşitsel İşleyen Hafıza"];
      _personResult.kelimeAyirtEtme = personResult["Kelime Ayırt Etme"];
      _personResult.sesAyirtEtme = personResult["Ses Ayırt Etme"];
      _personResult.dilCalismaBellegi = personResult["Dil Çalışma Belleği"];
      _personResult.kelimeIliskilendirme = personResult["Kelime İlişkilendirme"];
      _personResult.gorselDikkat = personResult["Görsel Dikkat"];
      _personResult.gorselDurtuKontrolu = personResult["Görsel Dürtü Kontrolü"];
      _personResult.isitselDikkat = personResult["İşitsel Dikkat"];
      _personResult.isitselDurtuKontolü = personResult["İşitsel Dürtü Kontrolü"];
      _personResult.ikiliGorselDikkat = personResult["İkili Görsel Dikkat"];
      _personResult.ikiliIsitselDikkat = personResult["İkili İşitsel Dikkat"];
      _personResult.ikiliGorselDurtuKontrolu = personResult["İkili Görsel Dürtü Kontrolü"];
      _personResult.ikiliIsitselDurtuKontolu = personResult["İkili İşitsel Dürtü Kontrolü"];
      _personResult.islemHizi = personResult["İşlem Hızı"];
      _personResult.bilisselEsneklik = personResult["Bilişsel Esneklik"];
      _personResult.algisalHiz = personResult["Algısal Hız"];
      _personResult.gorselIsleyenHafiza = personResult["Görsel İşleyen Hafıza"];
      _personResult.buyumeZihniyeti = personResult["Büyüme Zihniyeti"];
      _personResult.duygusalDuzenleme = personResult["Duygusal Düzenleme"];
      _personResult.ozYonetim = personResult["Öz Yönetim"];
      _personResult.sosyalYonetim = personResult["Sosyal Yönetim"];
      _personResult.duyguTanima = personResult["Duygu Tanıma"];
      _personResult.zihinOrtalamasi = personResult["Zihin Ortalaması"];

      _person.personResult = _personResult;

      // Person 10 Result
      const person10Result = this.person10ResultList.find(p10rl => p10rl["ID"] == _person.id && p10rl["Ad Soyad"] == _person.name);
      const _person10Result: Person10Model = <Person10Model> {};
      _person10Result.yonetim = person10Result["Yönetim"];
      _person10Result.dikkatVeSurdurebilme = person10Result["Dikkat Ve Sürdürebilme"];
      _person10Result.etkinIletisim = person10Result["Etkin İletişim"];
      _person10Result.isDisiplini = person10Result["İş Disiplini"];
      _person10Result.adaptasyon = person10Result["Adaptasyon"];
      _person10Result.kariyerGelisimi = person10Result["Kariyer Gelişimi"];
      _person10Result.ozYonetim = person10Result["Öz Yönetim"];
      _person10Result.problemCozme = person10Result["Problem Çözme"];
      _person10Result.yabanciDilKullanma = person10Result["Yabancı Dil Kullanma"];
      _person10Result.okumaAnlama = person10Result["Okuma Anlama"];

      _person.person10Result = _person10Result;

      // Occupation Result
      const occupationResult = this.occupationResultList.find(orl => orl["ID"] == _person.id && orl["Ad Soyad"] == _person.name);
      const _occupationResult: OccupationResultModel = <OccupationResultModel>{};
      _occupationResult.muhasebe = occupationResult["Muhasebe"];
      _occupationResult.finans = occupationResult["Finans"];
      _occupationResult.idariIsler = occupationResult["İdari İşler"];
      _occupationResult.arge = occupationResult["ARGE"];
      _occupationResult.bilisimTeknolojileri = occupationResult["Bilişim Teknolojileri"];
      _occupationResult.insanKaynaklari = occupationResult["İnsan Kaynakları"];
      _occupationResult.satinAlma = occupationResult["Satın Alma"];
      _occupationResult.pazarlama = occupationResult["Pazarlama"];
      _occupationResult.satis = occupationResult["Satış"];
      _occupationResult.uretimBeyazYaka = occupationResult["Üretim-Beyaz Yaka"];
      _occupationResult.uretimMaviYaka = occupationResult["Üretim-Mavi Yaka"];
      _occupationResult.kaliteGuvence = occupationResult["Kalite Güvence"];
      _occupationResult.kaliteKontrol = occupationResult["Kalite Kontrol"];
      _occupationResult.depo = occupationResult["Depo"];
      _occupationResult.sevkiyatLojistik = occupationResult["Sevkiyat-Lojistik"];
      _occupationResult.halklaIliskiler = occupationResult["Halkla İlişkiler"];
      _occupationResult.hukuk = occupationResult["Hukuk"];
      _occupationResult.reklamSosyalMedya = occupationResult["Reklam Ve Sosyal Medya"];
      _occupationResult.uretimPlanlama = occupationResult["Üretim Planlama"];
      _occupationResult.bakimOnarim = occupationResult["Bakım Onarım"];
      _occupationResult.ustYonetim = occupationResult["Üst Yönetim"];

      _person.occupationResult = _occupationResult;

      // Fill personsList
      this.personsList.push(_person);
    }

    this._PersonService.setPersonsList(this.personsList);
  }

  setCompanyName(companyName: string) {
    this.companyName = companyName;
  }

  getCompanyName(): string {
    return this.companyName;
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
