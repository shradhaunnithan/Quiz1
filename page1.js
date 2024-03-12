var score=0;

function next11() {
    document.getElementById("a1").style.backgroundColor = "red";
}
function next12() {
    document.getElementById("a2").style.backgroundColor = "green";
    score=score+1;
}
function next13() {
    document.getElementById("a3").style.backgroundColor = "red";
}
function next14() {
    document.getElementById("a4").style.backgroundColor = "red";
}

function next21() {
    document.getElementById("B1").style.backgroundColor = "red";
}
function next22() {
    document.getElementById("B2").style.backgroundColor = "red";
}
function next23() {
    document.getElementById("B3").style.backgroundColor = "red";
}
function next24() {
    document.getElementById("B4").style.backgroundColor = "green";
    score=score+1;
}

function next31() {
    document.getElementById("c1").style.backgroundColor = "red";
}
function next32() {
    document.getElementById("c2").style.backgroundColor = "red";
}
function next33() {
    document.getElementById("c3").style.backgroundColor = "green";
    score=score+1;
}
function next34() {
    document.getElementById("c4").style.backgroundColor = "red";
}

function next41() {
    document.getElementById("d1").style.backgroundColor = "red";
}
function next42() {
    document.getElementById("d2").style.backgroundColor = "red";
}
function next43() {
    document.getElementById("d3").style.backgroundColor = "red";
}
function next44() {
    document.getElementById("d4").style.backgroundColor = "green";
    score=score+1;
}
function next51() {
    document.getElementById("e1").style.backgroundColor = "green";
    score=score+1;
}
function next52() {
    document.getElementById("e2").style.backgroundColor = "red";
}
function next53() {
    document.getElementById("e3").style.backgroundColor = "red";
}
function next54() {
    document.getElementById("e4").style.backgroundColor = "red";
}
function next61() {
    document.getElementById("f1").style.backgroundColor = "green";
    score=score+1;
}
function next62() {
    document.getElementById("f2").style.backgroundColor = "red";
}
function next63() {
    document.getElementById("f3").style.backgroundColor = "red";
}
function next64() {
    document.getElementById("f4").style.backgroundColor = "red";
}
function next71() {
    document.getElementById("g1").style.backgroundColor = "red";
}
function next72() {
    document.getElementById("g2").style.backgroundColor = "green";
    score=score+1;
}
function next73() {
    document.getElementById("g3").style.backgroundColor = "red";
}
function next74() {
    document.getElementById("g4").style.backgroundColor = "red";
}
function next81() {
    document.getElementById("h1").style.backgroundColor = "green";
    score=score+1;
}
function next82() {
    document.getElementById("h2").style.backgroundColor = "red";
}
function next83() {
    document.getElementById("h3").style.backgroundColor = "red";
}
function next84() {
    document.getElementById("h4").style.backgroundColor = "red";
}
function next91() {
    document.getElementById("i1").style.backgroundColor = "red";
}
function next92() {
    document.getElementById("i2").style.backgroundColor = "green";
    score=score+1;
}
function next93() {
    document.getElementById("i3").style.backgroundColor = "red";
}
function next94() {
    document.getElementById("i4").style.backgroundColor = "red";
}
function next101() {
    document.getElementById("j1").style.backgroundColor = "red";
}
function next102() {
    document.getElementById("j2").style.backgroundColor = "red";
}
function next103() {
    document.getElementById("j3").style.backgroundColor = "green";
    score=score+1;
}
function next104() {
    document.getElementById("j4").style.backgroundColor = "red";
}
function next111() {
    document.getElementById("k1").style.backgroundColor = "red";
}
function next112() {
    document.getElementById("k2").style.backgroundColor = "red";
}
function next113() {
    document.getElementById("k3").style.backgroundColor = "red";
}
function next114() {
    document.getElementById("k4").style.backgroundColor = "green";
    score=score+1;
}
function next121() {
    document.getElementById("l1").style.backgroundColor = "red";
}
function next122() {
    document.getElementById("l2").style.backgroundColor = "red";
}
function next123() {
    document.getElementById("l3").style.backgroundColor = "green";
    score=score+1;
}
function next124() {
    document.getElementById("l4").style.backgroundColor = "red";
}
function next131() {
    document.getElementById("m1").style.backgroundColor = "red";
}
function next132() {
    document.getElementById("m2").style.backgroundColor = "red";
}
function next133() {
    document.getElementById("m3").style.backgroundColor = "red";
}
function next134() {
    document.getElementById("m4").style.backgroundColor = "green";
    score=score+1;
}
function next141() {
    document.getElementById("n1").style.backgroundColor = "red";
}
function next142() {
    document.getElementById("n2").style.backgroundColor = "green";
    score=score+1;
}
function next143() {
    document.getElementById("n3").style.backgroundColor = "red";
}
function next144() {
    document.getElementById("n4").style.backgroundColor = "red";
}
function next151() {
    document.getElementById("o1").style.backgroundColor = "green";
    score=score+1;
}
function next152() {
    document.getElementById("o2").style.backgroundColor = "red";
}
function next153() {
    document.getElementById("o3").style.backgroundColor = "red";
}
function next154() {
    document.getElementById("o4").style.backgroundColor = "red";
}
function check() {
    localStorage.setItem("score",score);
    window.location = "page2.html";
}

