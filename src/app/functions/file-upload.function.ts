import { Injectable } from "@angular/core";

import { PersonFunction } from "./person.function";

import { FileUploadModel } from "../models/file-upload.model";
import { PersonModel } from "../models/person.model";
import { PersonResultModel } from "../models/person-result.model";
import { Person10Model } from "../models/person-10.model";
import { PersonOccupationResultModel } from "../models/person-occupation-result.model";

@Injectable({
  providedIn: 'root'
})
export class FileUploadFunction {

  private fileList: FileUploadModel[] = [];


  constructor(
    private _PersonFunction: PersonFunction
  ) {}

  getFileList(): FileUploadModel[] {
    return this.fileList;
  }


  fileImport(
    param_fileInfo: FileUploadModel,
    param_personList: any[],
    param_personResult: any[],
    param_person10Result: any[],
    param_personOccupationResult: any[]
  ) {
    const v_fileInfo = param_fileInfo;
    const v_personList = param_personList;
    const v_personResult = param_personResult;
    const v_person10Result = param_person10Result;
    const v_personOccupationResult = param_personOccupationResult;

    this.fileList.push(v_fileInfo);

    for (let i = 0; i < v_personList.length; i++) {
      const person = v_personList[i];

      // Person List
      const _person: PersonModel = <PersonModel>{};
      _person.id = person["ID"];
      _person.name = person["Ad Soyad"];
      _person.department = person["Meslek"];
      _person.fileId = v_fileInfo.id; // File ID

      // Person Result
      const personResult = v_personResult.find(pr => pr["ID"] == _person.id);
      const _personResult: PersonResultModel = <PersonResultModel>{};
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
      const person10Result = v_person10Result.find(pr => pr["ID"] == _person.id);
      const _person10Result: Person10Model = <Person10Model>{};
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
      const occupationResult = v_personOccupationResult.find(orl => orl["ID"] == _person.id && orl["Ad Soyad"] == _person.name);
      const _occupationResult: PersonOccupationResultModel = <PersonOccupationResultModel>{};
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
      _person.personOccupationResult = _occupationResult;


      this._PersonFunction.pushPersonList(_person);
    }
  }

  getCompanyName(fileId: string): string {
    return this.fileList.find(f => f.id == fileId)!.companyName;
  }

  getFileUploadDate(fileId: string): string {
    return this.fileList.find(f => f.id == fileId)!.uploadDate;
  }

  deleteFile(file: FileUploadModel) {
    const filteredFileList: FileUploadModel[] = this.fileList.filter(f => f.id !== file.id);
    this.fileList = filteredFileList;
  }

}
