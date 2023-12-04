function RSA() {
    var gcd, p, q, no, n, t, e, i, x;
    gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;
    no = document.getElementById('msg').value;
    n = p * q;
    t = (p - 1) * (q - 1);
    for (e = 2; e < t; e++) {
        if (gcd(e, t) == 1) {
            break;
        }
    }
    for (i = 0; i < 10; i++) {
        x = 1 + i * t
        if (x % e == 0) {
            d = x / e;
            break;
        }
    }
    ctt = Math.pow(no, e).toFixed(0);
    ct = ctt % n;
    console.log(ctt);
    dtt = Math.pow(ct, d).toFixed(0);
    dt = dtt % n;
    console.log(dtt);
    document.getElementById('kalit(N)').innerHTML = n;
    document.getElementById('kalit1(e)').innerHTML = e;
    document.getElementById('kalit2(d)').innerHTML = d;
    document.getElementById('shifrlangantext(ct)').innerHTML = ct;
    document.getElementById('text(dt)').innerHTML = dt;
}

document.addEventListener('keydown', function (e){
    if(e.key === "Enter"){
        RSA();
    }
})

/*
gcd: Ikkita sonning eng kichik umumiy bo'luvchisini topish uchun rekursiv funksiya.
p: p qiymatini olish uchun p elementining ID-si orqali HTML-formasidan olgan qiymat.
q: q qiymatini olish uchun q elementining ID-si orqali HTML-formasidan olgan qiymat.
no: Matnning shifrlanmagan (asosiy) qiymatini olish uchun msg elementining ID-si orqali HTML-formasidan olgan qiymat.
n: n qiymatini hisoblash uchun p va q sonlari orasidagi ko'paytmasi.
t: t qiymatini hisoblash uchun (p - 1) * (q - 1) formulasi.
e: e qiymatini topish uchun t dan farqli bo'lgan eng kichik tub son.
i, x: Sikl orqali d qiymatini topish uchun i va x o'zgaruvchilari.
ctt, ct: Matnni shifrlash uchun ct qiymatini hisoblash uchun quyidagi formulalar.
dtt, dt: Shifrlangan matnni unshifrlash uchun dt qiymatini hisoblash uchun quyidagi formulalar.
*/