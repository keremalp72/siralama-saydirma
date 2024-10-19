let sayiAdet = Number(
  prompt("Lütfen en az 10 olacak şekilde kaç sayı ekleyeceğinizi yazınız:")
);

let sayilar = [];
let cift = [];
let tek = [];
let sayi;

let ciftSayilar = 0;
let tekSayilar = 0;

function topla() {
  for (let i = 0; i < sayiAdet; i++) {
    if (sayiAdet < 10) {
      alert("MİNİMUM 10 SAYI EKLEMELİSİNİZ!");
      return;
    }
    sayi = Number(prompt("Sayılarınızı giriniz: "));
    sayilar.push(sayi);

    if (sayi % 2 == 0) {
      ciftSayilar++;
      cift.push(sayi);
    } else if (sayi % 2 == 1) {
      tekSayilar++;
      tek.push(sayi);
    }
  }
  console.log(
    `${tekSayilar} tane tek sayı var ${ciftSayilar} tane çift sayı var`
  );
}
topla();

function ciftGöster() {
  for (let i = 0; i < cift.length; i++) {
    console.log(`çift sayılar: ${cift}`);
  }
}
ciftGöster();

function tekGöster() {
  for (let i = 0; i < tek.length; i++) {
    console.log(`tek sayılar: ${tek}`);
  }
}
tekGöster();
