const scriptURL = 'https://script.google.com/macros/s/AKfycbxOnW7kkmMHIuDbze8ehX7-tuQoTC68zu3jWerAjS-5PN3u0TAQnKADDVejNyBu9n5VOQ/exec'

const form = document.forms['contact-form']

var nombres = {cro48:["Cronwell Alarcón Mundaca y Noemi Morales Guevara", "2 adultos"],ren36:["Renato Alarcón Morales y Sandra León", "2 adultos"],and46:["André Alarcón Morales y Alessandra Cano Zapata", "2 adultos"],ale16:["Alejandra Zapata", "1 adulto"],sev43:["Severo Tineo Morales y Ruth Alarcón Mundaca", "2 adultos"],dan40:["Danny Tineo Alarcón y Belú Robles Galván", "2 adultos"],dha19:["Dharma Tineo Galván", "1 adulto"],pav19:["Pavel Tineo Alarcón", "1 adulto"],ren27:["Renzo Tineo Alarcón e hijos", "3 adultos"],edw44:["Edwin Alarcón Mundaca y Zonia Saldaña Marcos", "2 adultos"],gla31:["Gladis Momediano y Rosa Morales", "2 adultos"],ste24:["Stephany Alarcón Saldaña", "1 adulto"],jes49:["Jesús Gúzman Roca, Roxana Alarcón Mundaca e hijos", "4 adultos"],osc36:["Oscar Alarcón Mundaca y Zulma García", "2 adultos"],dan22:["Daniela Alarcón García", "1 adulto"],fab23:["Fabiola Alarcón Mundaca", "1 adulto"],hug45:["Hugo Morales Guevara y Blanca Del Campo Lucen", "2 adultos"],arn38:["Arnaldo Maraví y Evy Morales Del Campo", "2 adultos"],ste40:["Steve Lindo y Patricia Morales Del Campo", "2 adultos"],chr32:["Chris Peterson y Andrea Peterson", "2 adultos"],rud27:["Rudy Condeña y Gina Condeña", "2 adultos"],die29:["Diego Barrios y Flor Gonzáles", "2 adultos"],ric35:["Ricky Sepulveda y Christy Sepulveda", "2 adultos"],jun31:["Junior Gonzáles y Lina Gonzáles", "2 adultos"],jor30:["Jorge Morales Guevara y esposa", "2 adultos"],ros15:["Rosalia Morales", "1 adulto"],yod20:["Yodi García Blazques", "1 adulto"],kev21:["Kevin Alarcón Saldaña", "1 adulto"],rud29:["Rudy Vila y Marlene Momediano", "2 adultos"],alv21:["Alvaro Vila Momediano", "1 adulto"],ser21:["Sergio Vila Momediano", "1 adulto"],luz20:["Luz Martínez Paredes", "1 adulto"],fer54:["Fernando Saccatoma Contreras y Zenhya Morales Martínez", "2 adultos "],lui28:["Luis Morales Rezza y familia", "3 adultos"],jes19:["Jesús Morales Rezza", "1 adulto"],mar20:["Maruja Morales Rezza", "1 adulto"],kar23:["Karim Fernández Morales", "1 adulto"],car49:["Carmen Martínez Paredes y Armando Morales Infante", "2 adultos"],ala54:["Alaín Morales Martínez  y María Teresa Martínez García", "2 adultos"],van39:["Vanessa Morales Martínez y David Huamán", "2 adultos"],pao38:["Paolo Morales Martínez y Carol Revatta", "2 adultos"],car45:["Carlos Morales Martínez y Karolina Serna Cuya", "2 adultos"],mar44:["Marco Peña Matos y Giovanna Morales Martínez", "2 adultos"],gle23:["Glenda Martínez Paredes", "1 adulto"],chr53:["Christian Curi Quispe, María Aguilar Martínez e hijas", "3 adultos "],roc48:["Rocío Falconí Martínez y Máximo Villagaray Yance", "2 adultos "],arm24:["Armando Martínez Paredes", "1 adulto"],cla32:["Claudio Martínez Paredes e hijos", "3 adultos"],raú51:["Raúl Martínez Paredes, Ana Bautista Hidalgo e hijos", "4 adultos"],rox23:["Roxana Martínez Paredes", "1 adulto"],car32:["Carlos Alarcón Martínez y pareja", "2 adultos"],eli32:["Eliana Alarcón Martínez y esposo", "2 adultos"],seg48:["Segundo Castro Barbarán y Rosa Vallejo de Castro", "2 adultos"],edw42:["Edward Castro Vallejo y Grecia Juarez Ruiz", "2 adultos "],moi21:["Moisés Castro Vallejo", "1 adulto"],jor20:["Jorge Castro Vallejo", "1 adulto"],mar26:["Mardonia Martínez Paredes ", "1 adulto"],mil26:["Milagros Martínez Martínez", "1 adulto"],gia35:["Giannina Saldarriaga Medina e hijos", "3 adultos"],edw46:["Edward Martínez Paredes y Lourdes Ríos Fuertes", "2 adultos"],ren17:["René Yañez Jurado", "1 adulto"],lou24:["Lourdes Rodríguez Chocos", "1 adulto"],nat26:["Nathaly Chocos Sehgelmeble", "1 adulto"],mag47:["Maggy Rodríguez Jeri y Emiliano Vilchez Alvites", "2 adultos"],áng43:["Ángela Castro Miranda y Ricardo Prada Lagos", "2 adultos"],pao24:["Paola Carrasco Gutierrez", "1 adulto"],mar22:["Mariela Jáuregui Ponce", "1 adulto"],edi48:["Edi Rosa Gamarra Butrón y Edwar Riveros Chahuayo", "2 adultos"],mil47:["Militza Najarro Prado e Israel Mauricio Ramírez", "2 adultos"],and18:["Andrea Ñaña Alfaro", "1 adulto"],pat24:["Patricia Córdova Muñaqui", "1 adulto"],and21:["André Zevallos García", "1 adulto"],jos29:["Jose Antonio Rodríguez Maravi", "1 adulto"],mav23:["Mavelly Lagos Canchanya", "1 adulto"],die22:["Diego Rivera Bocanegra", "1 adulto"],man35:["Manuel Grados Jares y Julie Navarro", "2 adultos"],con53:["Constantino Sulópulos Kazakos y Maria Fernanda Zavala", "2 adultos"],pau32:["Paulo Morales Del Campo y pareja", "2 adultos"],gus20:["Gustavo León Alarcón", "1 adulto"],seb22:["Sebastian Bendezu Alca", "1 adulto"],lui17:["Luis Choque Ramos", "1 adulto"],ofe33:["Ofelia Saccatoma Contreras e hija", "2 adultos"],roy20:["Roy De la Cruz Ramos", "1 adulto"],mig28:["Miguel Sulca Tudela y esposa", "2 adultos"],bri33:["Brian Mora Ramos y Anamaria Pingo", "2 adultos"],jos23:["Jose Rodríguez y pareja", "2 adultos"],ren30:["Renato Gonzáles Polar Reátegui", "1 adulto"],kia28:["Kiara Chau Miyakawa y pareja", "2 adultos"],jes34:["Jesús Saccatoma Contreras y pareja", "2 adultos"],ath31:["Athala Daga Quispe y Jhoe López", "2 adultos"],mar12:["Maria García", "1 adulto"],nat15:["Nathan Villegas", "1 adulto"],kel11:["Kely García", "1 adulto"],ros13:["Rosario Ernau", "1 adulto"],jor12:["Jorge Rivera", "1 adulto"],jua22:["Juan de Dios Huarancca", "1 adulto"],jos12:["José Patazca", "1 adulto"],jor21:["Jorge Luis Carhuarica", "1 adulto"],rob12:["Roberto Ayra", "1 adulto"],han14:["Handry Guillen", "1 adulto"],eri22:["Erick Valdivia Camacho", "1 adulto"],ger42:["Germán Curi Gutierrez y Gladys Quispe Joyo", "2 adultos"],car27:["Carlos Arce Moraes y esposa", "2 adultos"],wen42:["Wendy Momediano Almonacid y Rodrigo Ayarza", "2 adultos"],mor35:["Mortiz Momediano Almonacid y pareja", "2 adultos"],ger23:["German Rodriguez Chocos", "1 adulto"],lil28:["Liliam Natali Rodriguez Jerí", "1 adulto"],nic24:["Nicole Pretell Sarmiento", "1 adulto"],giu25:["Giuliana Gutierrez Zarate", "1 adulto"],ric33:["Ricardo Arteaga y Melany Cubillas", "2 adultos"],san17:["Sandro Alain Roca", "1 adulto"],rub11:["Rubi Garcia", "1 adulto"],nic44:["Nick Montero Aguado y María Guillen Zambrano", "2 adultos"],seb24:["Sebastian Perez y pareja", "2 adultos"],mar13:["Marcela Draga", "1 adulto"],ana35:["Ana Lucía Morales Balarezo y pareja", "2 adultos"],món23:["Mónica Morales Balarezo", "1 adulto"],ver25:["Veronika Morales Balarezo", "1 adulto"],wer21:["Werner Rodríguez Jerí", "1 adulto"],elm20:["Elmer Rodríguez Jerí", "1 adulto"],wer29:["Werner Rodríguez y Leila Jerí", "2 adultos"],mar24:["Mario Arce y Luz Ramirez", "2 adultos"],roc26:["Rocio Arce y Irvin Huapauc", "2 adultos"],gal30:["Galia García Blasquez y esposo", "2 adultos"],nak27:["Naky Palomino Taco y pareja", "2 adultos"]};
aux = []
for (var key in nombres){
    aux.push(nombres[key][0])
}

form.addEventListener('submit',e => {
    e.preventDefault()
    if (aux.includes(document.getElementById('form-nama').value) == true){
    document.getElementById('invitados').removeAttribute('disabled');
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Gracias por confirmar tu asistencia!"))
    .then(() => {window.location.reload(); })
    document.getElementById('invitados').setAttribute('disabled','disabled');
    } else {
    window.alert("Por favor, escoja un nombre válido de la lista y asegurese que todas las casillas estén llenas.")
    }
})

const storage = (table) => {

    if (!localStorage.getItem(table)) {
        localStorage.setItem(table, JSON.stringify({}));
    }

    const get = (key = null) => {
        let data = JSON.parse(localStorage.getItem(table));
        return key ? data[key] : data;
    };

    const set = (key, value) => {
        let storage = get();
        storage[key] = value;
        localStorage.setItem(table, JSON.stringify(storage));
    };

    const unset = (key) => {
        let storage = get();
        delete storage[key];
        localStorage.setItem(table, JSON.stringify(storage));
    };

    const has = (key) => Object.keys(get()).includes(key);

    return {
        get,
        set,
        unset,
        has,
    };
};

const request = (method, path) => {

    let url = document.querySelector('body').getAttribute('data-url');
    let req = {
        method: method.toUpperCase(),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (url.slice(-1) == '/') {
        url = url.slice(0, -1);
    }

    return {
        async then(...params) {
            return fetch(url + path, req)
                .then((res) => res.json())
                .then((res) => {
                    if (res.error !== null) {
                        throw res.error[0];
                    }

                    return res;
                })
                .then(...params);
        },
        token(token) {
            req.headers['Authorization'] = 'Bearer ' + token;
            return this;
        },
        body(body) {
            req.body = JSON.stringify(body);
            return this;
        },
    };
};

const util = (() => {

    const opacity = (nama) => {
        let nm = document.getElementById(nama);
        let op = parseInt(nm.style.opacity);
        let clear = null;

        clear = setInterval(() => {
            if (op >= 0) {
                nm.style.opacity = op.toString();
                op -= 0.025;
            } else {
                clearInterval(clear);
                clear = null;
                nm.remove();
                return;
            }
        }, 10);
    };

    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    const salin = (btn, msg = 'Copiado', timeout = 1500) => {
        navigator.clipboard.writeText(btn.getAttribute('data-nomer'));

        let tmp = btn.innerHTML;
        btn.innerHTML = msg;
        btn.disabled = true;

        let clear = null;
        clear = setTimeout(() => {
            btn.innerHTML = tmp;
            btn.disabled = false;
            btn.focus();

            clearTimeout(clear);
            clear = null;
            return;
        }, timeout);
    };

    const timer = () => {
        let countDownDate = (new Date(document.getElementById('tampilan-waktu').getAttribute('data-waktu').replace(' ', 'T'))).getTime();

        setInterval(() => {
            let distance = Math.abs(countDownDate - (new Date()).getTime());

            document.getElementById('hari').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById('jam').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('menit').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('detik').innerText = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);
    };

    const music = (btn) => {
        if (btn.getAttribute('data-status') !== 'true') {
            btn.setAttribute('data-status', 'true');
            audio.play();
            btn.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
        } else {
            btn.setAttribute('data-status', 'false');
            audio.pause();
            btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        }
    };

    const modal = (img) => {
        document.getElementById('show-modal-image').src = img.src;
        (new bootstrap.Modal('#modal-image')).show();
    };

    const tamu = () => {
        let name = (new URLSearchParams(window.location.search)).get('to');

        if (!name) {
            document.getElementById('nama-tamu').remove();
            return;
        }

        let div = document.createElement('div');
        div.classList.add('m-2');
        div.innerHTML = `<p class="mt-0 mb-1 mx-0 p-0 text-light">Kepada Yth Bapak/Ibu/Saudara/i</p><h2 class="text-light">${escapeHtml(name)}</h2>`;

        document.getElementById('form-nama').value = name;
        document.getElementById('nama-tamu').appendChild(div);
    };

    const animation = () => {
        const duration = 50 * 100;
        const animationEnd = Date.now() + duration;
        const colors = ["#FFC0CB", "#FF1493", "#C71585"];

        const randomInRange = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        /*const heart = confetti.shapeFromPath({
            path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
            matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
        });*/

        (function frame() {
            const timeLeft = animationEnd - Date.now();

            colors.forEach((color) => {
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: Math.max(15, 75 * (timeLeft / duration)),
                    origin: {
                        x: Math.random(),
                        y: Math.abs(Math.random() - (timeLeft / duration)),
                    },
                    zIndex: 1057,
                    shapes: ["heart"],
                    colors: [color],
                    drift: randomInRange(-0.5, 0.5),
                    gravity: randomInRange(0.5, 1),
                    scalar: randomInRange(0.5, 1),
                });
            });

            const aux = 0;

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        })();
    };

    
    const buka = async (button) => {
        button.disabled = true;
        document.querySelector('body').style.overflowY = 'scroll';
        document.getElementById('home').style.display = 'block';
        AOS.init();
        audio.play();

        if (localStorage.getItem('alertClosed')) {
            document.getElementById('alertDiv').style.display = 'none';
        }

        opacity('welcome');
        document.getElementById('tombol-musik').style.display = 'block';
        timer();

        /*confetti({
            origin: { y: 1 },
            zIndex: 1057,
        });*/


        setTimeout(animation(),10000);
    };

    const show = () => {
        tamu();
        opacity('loading');
        window.scrollTo(0, 0);
    };

    const animate = (svg, timeout, classes) => {
        let handler = null;

        handler = setTimeout(() => {
            svg.classList.add(classes);
            handler = null;
        }, timeout);
    };

    return {
        buka,
        modal,
        music,
        salin,
        escapeHtml,
        show,
        animate,
        animation,
    };
})();
/*
const progress = (() => {

    const assets = document.querySelectorAll('img');
    const info = document.getElementById('progress-info');
    const bar = document.getElementById('bar');

    let total = assets.length;
    let loaded = 0;

    const progress = () => {
        loaded += 1;

        bar.style.width = Math.min((loaded / total) * 100, 100).toString() + "%";
        info.innerText = `Cargando página (${loaded}/${total}) [${parseInt(bar.style.width).toFixed(0)}%]`;

        if (loaded == total) {
            util.show();
        }
    };

    assets.forEach((asset) => {
        if (asset.complete && (asset.naturalWidth !== 0)) {
            progress();
        } else {
            asset.addEventListener('load', () => progress());
        }
    });
})();*/

const audio = (() => {
    let audio = null;

    const singleton = () => {
        if (!audio) {
            audio = new Audio();
            audio.src = document.getElementById('tombol-musik').getAttribute('data-url');
            audio.load();
            audio.currentTime = 0;
            audio.autoplay = true;
            audio.muted = false;
            audio.loop = true;
            audio.volume = 1;
        }

        return audio;
    };

    return {
        play: () => singleton().play(),
        pause: () => singleton().pause(),
    };
})();

const pagination = (() => {

    const perPage = 10;
    let pageNow = 0;
    let resultData = 0;

    const page = document.getElementById('page');
    const prev = document.getElementById('previous');
    const next = document.getElementById('next');

    const disabledPrevious = () => {
        prev.classList.add('disabled');
    };

    const disabledNext = () => {
        next.classList.add('disabled');
    };

    const buttonAction = async (button) => {
        let tmp = button.innerHTML;
        button.disabled = true;
        button.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;
        await comment.ucapan();
        document.getElementById('daftar-ucapan').scrollIntoView({ behavior: 'smooth' });
        button.disabled = false;
        button.innerHTML = tmp;
    };

    return {
        getPer: () => {
            return perPage;
        },
        getNext: () => {
            return pageNow;
        },
        reset: async () => {
            pageNow = 0;
            resultData = 0;
            page.innerText = 1;
            next.classList.remove('disabled');
            await comment.ucapan();
            disabledPrevious();
        },
        setResultData: (len) => {
            resultData = len;
            if (resultData < perPage) {
                disabledNext();
            }
        },
        previous: async (button) => {
            if (pageNow < 0) {
                disabledPrevious();
            } else {
                pageNow -= perPage;
                disabledNext();
                await buttonAction(button);
                page.innerText = parseInt(page.innerText) - 1;
                next.classList.remove('disabled');
                if (pageNow <= 0) {
                    disabledPrevious();
                }
            }
        },
        next: async (button) => {
            if (resultData < perPage) {
                disabledNext();
            } else {
                pageNow += perPage;
                disabledPrevious();
                await buttonAction(button);
                page.innerText = parseInt(page.innerText) + 1;
                prev.classList.remove('disabled');
            }
        }
    };
})();

const session = (() => {

    let body = document.querySelector('body');

    const login = async () => {
        await request('POST', '/api/session')
            .body({
                email: body.getAttribute('data-email'),
                password: body.getAttribute('data-password')
            })
            .then((res) => {
                if (res.code == 200) {
                    localStorage.removeItem('token');
                    localStorage.setItem('token', res.data.token);
                    comment.ucapan();
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
                window.location.reload();
                return;
            });
    };

    const check = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            const jwt = JSON.parse(atob(token.split('.')[1]));

            if (jwt.exp < ((new Date()).getTime() / 1000) || !jwt.iss.includes((new URL(window.location.href)).host)) {
                await login();
            } else {
                await comment.ucapan();
            }
        } else {
            await login();
        }
    };

    return { check };
})();

const like = (() => {

    const likes = storage('likes');

    const like = async (button) => {
        let token = localStorage.getItem('token');
        let id = button.getAttribute('data-uuid');

        if (!token) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        let heart = button.firstElementChild.lastElementChild;
        let info = button.firstElementChild.firstElementChild;

        button.disabled = true;
        info.innerText = 'Loading..';

        if (likes.has(id)) {
            await request('PATCH', '/api/comment/' + likes.get(id))
                .token(token)
                .then((res) => {
                    if (res.data.status) {
                        likes.unset(id);

                        heart.classList.remove('fa-solid', 'text-danger');
                        heart.classList.add('fa-regular');

                        info.setAttribute('data-suka', (parseInt(info.getAttribute('data-suka')) - 1).toString());
                    }
                })
                .catch((err) => {
                    alert(`Terdapat kesalahan: ${err}`);
                });

        } else {
            await request('POST', '/api/comment/' + id)
                .token(token)
                .then((res) => {
                    if (res.code == 201) {
                        likes.set(id, res.data.uuid);

                        heart.classList.remove('fa-regular');
                        heart.classList.add('fa-solid', 'text-danger');

                        info.setAttribute('data-suka', (parseInt(info.getAttribute('data-suka')) + 1).toString());
                    }
                })
                .catch((err) => {
                    alert(`Terdapat kesalahan: ${err}`);
                });
        }

        info.innerText = info.getAttribute('data-suka') + ' suka';
        button.disabled = false;
    };

    return { like };
})();

const comment = (() => {
    const buttonBatal = document.getElementById('batal');
    const buttonBalas = document.getElementById('balas');
    const buttonUbah = document.getElementById('ubah');
    const buttonKirim = document.getElementById('kirim');

    const formKehadiran = document.getElementById('form-kehadiran');
    const formNama = document.getElementById('form-nama');
    const formPesan = document.getElementById('form-pesan');

    const owns = storage('owns');
    const likes = storage('likes');

    const loader = `<span class="spinner-border spinner-border-sm me-1"></span>Loading...`;

    let temporaryID = null;

    const convertMarkdownToHTML = (input) => {
        return input
            .replace(/\*(?=\S)(.*?)(?<!\s)\*/s, '<strong class="text-dark">$1</strong>')
            .replace(/\_(?=\S)(.*?)(?<!\s)\_/s, '<em class="text-dark">$1</em>')
            .replace(/\~(?=\S)(.*?)(?<!\s)\~/s, '<del class="text-dark">$1</del>')
            .replace(/\`\`\`(?=\S)(.*?)(?<!\s)\`\`\`/s, '<code class="font-monospace text-dark">$1</code>');
    };

    const resetForm = () => {

        buttonBatal.style.display = 'none';
        buttonBalas.style.display = 'none';
        buttonUbah.style.display = 'none';
        buttonKirim.style.display = 'block';

        document.getElementById('label-kehadiran').style.display = 'block';
        document.getElementById('balasan').innerHTML = null;
        formKehadiran.style.display = 'block';

        formNama.value = null;
        formKehadiran.value = 0;
        formPesan.value = null;

        formNama.disabled = false;
        formKehadiran.disabled = false;
        formPesan.disabled = false;
    };

    const kirim = async () => {
        let nama = formNama.value;
        let hadir = parseInt(formKehadiran.value);
        let komentar = formPesan.value;
        let token = localStorage.getItem('token') ?? '';

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        if (nama.length == 0) {
            alert('nama tidak boleh kosong');
            return;
        }

        if (nama.length >= 35) {
            alert('panjangan nama maksimal 35');
            return;
        }

        if (hadir == 0) {
            alert('silahkan pilih kehadiran');
            return;
        }

        if (komentar.length == 0) {
            alert('pesan tidak boleh kosong');
            return;
        }

        formNama.disabled = true;
        formKehadiran.disabled = true;
        formPesan.disabled = true;
        buttonKirim.disabled = true;

        let tmp = buttonKirim.innerHTML;
        buttonKirim.innerHTML = loader;

        let isSuccess = false;
        await request('POST', '/api/comment')
            .token(token)
            .body({
                nama: nama,
                hadir: hadir == 1,
                komentar: komentar
            })
            .then((res) => {
                if (res.code == 201) {
                    owns.set(res.data.uuid, res.data.own);
                    isSuccess = true;
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
            });

        if (isSuccess) {
            await pagination.reset();
            document.getElementById('daftar-ucapan').scrollIntoView({ behavior: 'smooth' });
            resetForm();
        }

        buttonKirim.disabled = false;
        buttonKirim.innerHTML = tmp;
        formNama.disabled = false;
        formKehadiran.disabled = false;
        formPesan.disabled = false;
    };

    const balasan = async (button) => {
        resetForm();

        button.disabled = true;
        let tmp = button.innerText;
        button.innerText = 'Loading...';

        let id = button.getAttribute('data-uuid');
        let token = localStorage.getItem('token') ?? '';

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        document.getElementById('balasan').innerHTML = renderLoading(1);
        formKehadiran.style.display = 'none';
        document.getElementById('label-kehadiran').style.display = 'none';

        await request('GET', '/api/comment/' + id)
            .token(token)
            .then((res) => {
                if (res.code == 200) {
                    buttonKirim.style.display = 'none';
                    buttonBatal.style.display = 'block';
                    buttonBalas.style.display = 'block';

                    temporaryID = id;

                    document.getElementById('balasan').innerHTML = `
                    <div class="my-3">
                        <h6>Balasan</h6>
                        <div id="id-balasan" data-uuid="${id}" class="card-body bg-light shadow p-3 rounded-4">
                            <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <p class="text-dark text-truncate m-0 p-0" style="font-size: 0.95rem;">
                                    <strong>${util.escapeHtml(res.data.nama)}</strong>
                                </p>
                                <small class="text-dark m-0 p-0" style="font-size: 0.75rem;">${res.data.created_at}</small>
                            </div>
                            <hr class="text-dark my-1">
                            <p class="text-dark m-0 p-0" style="white-space: pre-line">${convertMarkdownToHTML(util.escapeHtml(res.data.komentar))}</p>
                        </div>
                    </div>`;
                }
            })
            .catch((err) => {
                resetForm();
                alert(`Terdapat kesalahan: ${err}`);
            });

        document.getElementById('ucapan').scrollIntoView({ behavior: 'smooth' });
        button.disabled = false;
        button.innerText = tmp;
    };

    const innerComment = (data) => {
        return `
        <div class="d-flex flex-wrap justify-content-between align-items-center">
            <div class="d-flex flex-wrap justify-content-start align-items-center">
                <button style="font-size: 0.8rem;" onclick="comment.balasan(this)" data-uuid="${data.uuid}" class="btn btn-sm btn-outline-dark rounded-3 py-0">Balas</button>
                ${owns.has(data.uuid)
                ? `
                <button style="font-size: 0.8rem;" onclick="comment.edit(this)" data-uuid="${data.uuid}" class="btn btn-sm btn-outline-dark rounded-3 py-0 ms-1">Ubah</button>
                <button style="font-size: 0.8rem;" onclick="comment.hapus(this)" data-uuid="${data.uuid}" class="btn btn-sm btn-outline-dark rounded-3 py-0 ms-1">Hapus</button>`
                : ''}
            </div>
            <button style="font-size: 0.8rem;" onclick="like.like(this)" data-uuid="${data.uuid}" class="btn btn-sm btn-outline-dark rounded-2 py-0 px-0">
                <div class="d-flex justify-content-start align-items-center">
                    <p class="my-0 mx-1" data-suka="${data.like.love}">${data.like.love} suka</p>
                    <i class="py-1 me-1 p-0 ${likes.has(data.uuid) ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart'}"></i>
                </div>
            </button>
        </div>
        ${innerCard(data.comments)}`;
    };

    const innerCard = (comment) => {
        let result = '';

        comment.forEach((data) => {
            result += `
            <div class="card-body border-start bg-light py-2 ps-2 pe-0 my-2 ms-2 me-0" id="${data.uuid}">
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <p class="text-dark text-truncate m-0 p-0" style="font-size: 0.95rem;">
                        <strong>${util.escapeHtml(data.nama)}</strong>
                    </p>
                    <small class="text-dark m-0 p-0" style="font-size: 0.75rem;">${data.created_at}</small>
                </div>
                <hr class="text-dark my-1">
                <p class="text-dark mt-0 mb-1 mx-0 p-0" style="white-space: pre-line">${convertMarkdownToHTML(util.escapeHtml(data.komentar))}</p>
                ${innerComment(data)}
            </div>`;
        });

        return result;
    };

    const renderCard = (data) => {
        const DIV = document.createElement('div');
        DIV.classList.add('mb-3');
        DIV.innerHTML = `
        <div class="card-body bg-light shadow p-3 m-0 rounded-4" data-parent="true" id="${data.uuid}">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
                <p class="text-dark text-truncate m-0 p-0" style="font-size: 0.95rem;">
                    <strong class="me-1">${util.escapeHtml(data.nama)}</strong><i class="fa-solid ${data.hadir ? 'fa-circle-check text-success' : 'fa-circle-xmark text-danger'}"></i>
                </p>
                <small class="text-dark m-0 p-0" style="font-size: 0.75rem;">${data.created_at}</small>
            </div>
            <hr class="text-dark my-1">
            <p class="text-dark mt-0 mb-1 mx-0 p-0" style="white-space: pre-line">${convertMarkdownToHTML(util.escapeHtml(data.komentar))}</p>
            ${innerComment(data)}
        </div>`;
        return DIV;
    };

    const ucapan = async () => {
        const UCAPAN = document.getElementById('daftar-ucapan');
        UCAPAN.innerHTML = renderLoading(pagination.getPer());

        let token = localStorage.getItem('token') ?? '';
        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        await request('GET', `/api/comment?per=${pagination.getPer()}&next=${pagination.getNext()}`)
            .token(token)
            .then((res) => {
                if (res.code == 200) {
                    UCAPAN.innerHTML = null;
                    res.data.forEach((data) => UCAPAN.appendChild(renderCard(data)));
                    pagination.setResultData(res.data.length);

                    if (res.data.length == 0) {
                        UCAPAN.innerHTML = `<div class="h6 text-center">Tidak ada data</div>`;
                    }
                }
            })
            .catch((err) => alert(`Terdapat kesalahan: ${err}`));
    };

    const renderLoading = (num) => {
        let result = '';

        for (let index = 0; index < num; index++) {
            result += `
            <div class="mb-3">
                <div class="card-body bg-light shadow p-3 m-0 rounded-4">
                    <div class="d-flex flex-wrap justify-content-between align-items-center placeholder-glow">
                        <span class="placeholder bg-secondary col-5"></span>
                        <span class="placeholder bg-secondary col-3"></span>
                    </div>
                    <hr class="text-dark my-1">
                    <p class="card-text placeholder-glow">
                        <span class="placeholder bg-secondary col-6"></span>
                        <span class="placeholder bg-secondary col-5"></span>
                        <span class="placeholder bg-secondary col-12"></span>
                    </p>
                </div>
            </div>`;
        }

        return result;
    };

    const balas = async () => {
        let nama = formNama.value;
        let komentar = formPesan.value;
        let token = localStorage.getItem('token') ?? '';
        let id = document.getElementById('id-balasan').getAttribute('data-uuid');

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        if (nama.length == 0) {
            alert('nama tidak boleh kosong');
            return;
        }

        if (nama.length >= 35) {
            alert('panjangan nama maksimal 35');
            return;
        }

        if (komentar.length == 0) {
            alert('pesan tidak boleh kosong');
            return;
        }

        formNama.disabled = true;
        formPesan.disabled = true;

        buttonBatal.disabled = true;
        buttonBalas.disabled = true;
        let tmp = buttonBalas.innerHTML;
        buttonBalas.innerHTML = loader;

        let isSuccess = false;
        await request('POST', '/api/comment')
            .token(token)
            .body({
                nama: nama,
                id: id,
                komentar: komentar
            })
            .then((res) => {
                if (res.code == 201) {
                    isSuccess = true;
                    owns.set(res.data.uuid, res.data.own);
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
            });

        if (isSuccess) {
            await ucapan();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
            resetForm();
        }

        buttonBatal.disabled = false;
        buttonBalas.disabled = false;
        buttonBalas.innerHTML = tmp;
        formNama.disabled = false;
        formPesan.disabled = false;
    };

    const ubah = async () => {
        let token = localStorage.getItem('token') ?? '';
        let id = buttonUbah.getAttribute('data-uuid');
        let hadir = formKehadiran.value;
        let komentar = formPesan.value;

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        if (document.getElementById(id).getAttribute('data-parent') === 'true' && hadir == 0) {
            alert('silahkan pilih kehadiran');
            return;
        }

        if (komentar.length == 0) {
            alert('pesan tidak boleh kosong');
            return;
        }

        formKehadiran.disabled = true;
        formPesan.disabled = true;

        buttonUbah.disabled = true;
        buttonBatal.disabled = true;
        let tmp = buttonUbah.innerHTML;
        buttonUbah.innerHTML = loader;

        let isSuccess = false;
        await request('PUT', '/api/comment/' + owns.get(id))
            .body({
                hadir: parseInt(hadir) == 1,
                komentar: komentar
            })
            .token(token)
            .then((res) => {
                if (res.data.status) {
                    isSuccess = true;
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
            });

        if (isSuccess) {
            await ucapan();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
            resetForm();
        }

        buttonUbah.innerHTML = tmp;
        buttonUbah.disabled = false;
        buttonBatal.disabled = false;
        formKehadiran.disabled = false;
        formPesan.disabled = false;
    };

    const hapus = async (button) => {
        if (!confirm('Kamu yakin ingin menghapus?')) {
            return;
        }

        let token = localStorage.getItem('token') ?? '';
        let id = button.getAttribute('data-uuid');

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        resetForm();

        button.disabled = true;
        let tmp = button.innerText;
        button.innerText = 'Loading..';

        await request('DELETE', '/api/comment/' + owns.get(id))
            .token(token)
            .then((res) => {
                if (res.data.status) {
                    owns.unset(id);
                    document.getElementById(id).remove();
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
            });

        button.innerText = tmp;
        button.disabled = false;
    };

    const edit = async (button) => {
        resetForm();

        button.disabled = true;
        let tmp = button.innerText;
        button.innerText = 'Loading...';

        let id = button.getAttribute('data-uuid').toString();
        let token = localStorage.getItem('token') ?? '';

        if (token.length == 0) {
            alert('Terdapat kesalahan, token kosong !');
            window.location.reload();
            return;
        }

        await request('GET', '/api/comment/' + id)
            .token(token)
            .then((res) => {
                if (res.code == 200) {
                    temporaryID = id;

                    buttonBatal.style.display = 'block';
                    buttonUbah.style.display = 'block';
                    buttonKirim.style.display = 'none';
                    buttonUbah.setAttribute('data-uuid', id);

                    formPesan.value = res.data.komentar;
                    formNama.value = res.data.nama;
                    formNama.disabled = true;

                    if (document.getElementById(id).getAttribute('data-parent') !== 'true') {
                        document.getElementById('label-kehadiran').style.display = 'none';
                        formKehadiran.style.display = 'none';
                    } else {
                        formKehadiran.value = res.data.hadir ? 1 : 2;
                        document.getElementById('label-kehadiran').style.display = 'block';
                        formKehadiran.style.display = 'block';
                    }

                    document.getElementById('ucapan').scrollIntoView({ behavior: 'smooth' });
                }
            })
            .catch((err) => {
                alert(`Terdapat kesalahan: ${err}`);
            });

        button.disabled = false;
        button.innerText = tmp;
    };

    const batal = () => {
        if (temporaryID) {
            document.getElementById(temporaryID).scrollIntoView({ behavior: 'smooth', block: 'center' });
            temporaryID = null;
        }

        resetForm();
    };

    return {
        ucapan,
        renderLoading,
        balasan,
        hapus,
        edit,
        batal,
        balas,
        ubah,
        kirim
    };
})();

