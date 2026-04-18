var animals=[
    {
    name: "Bodri",
    emoji: "🐕",
    age: "3 éves",
    type: "Kutya",
    desc: "Bodri egy barátságos és energikus keverék, aki imád labdázni és sétálni. Gyerekekkel is jól kijön."
    },
    {
    name: "Cirmi",
    emoji: "🐈",
    age: "2 éves",
    type: "Macska",
    desc: "Cirmi csöndes és szerető macska, aki egy nyugodt otthonban érzi magát a legjobban."
    },
    {
    name: "Morzsi",
    emoji: "🐩",
    age: "5 éves",
    type: "Kutya",
    desc: "Morzsi egy kis termetű, szelíd kutya. Tökéletes lakástárs egyedülállóknak vagy idősebbeknek."
    },
    {
    name: "Füles",
    emoji: "🐇",
    age: "1 éves",
    type: "Nyúl",
    desc: "Füles kíváncsi és játékos nyuszi. Ketrecet nem igényel, szabadon mozog a lakásban."
    },
    {
    name: "Tigris",
    emoji: "🐈‍⬛",
    age: "4 éves",
    type: "Macska",
    desc: "Tigris egy bátor fekete macska. Először tartózkodó, de hamar megkedveli új gazdáját."
    },
    {
    name: "Mancs",
    emoji: "🦮",
    age: "6 éves",
    type: "Kutya",
     desc: "Mancs tapasztalt és nyugodt kutya. Egy csendes, biztonságos otthonra vágyik idős korára."
    }
];


var grid = document.getElementById('animalsGrid');

    animals.forEach(function(animal, index) {
        var card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML =
                '<div class="animal-emoji">' + animal.emoji + '</div>' +
                '<div class="animal-info">' +
                '<h3>' + animal.name + '</h3>' +
                '<div class="animal-meta">' + 
               '<span>' + animal.type + '</span>' +
                '<span>' + animal.age + '</span>' +
                '</div>' +
                '<p>' + animal.desc + '</p>' +
                '<button class="btn-adopt" id="btn-' + index + '" onclick="adopt(' + index + ')">Örökbefogadás</button>' +
            '</div>';
        grid.appendChild(card);
        });

        // Örökbefogadás esemény
    function adopt(index) {
        var animal = animals[index];
        var btn = document.getElementById('btn-' + index);

            document.getElementById('modalIcon').textContent = animal.emoji;
            document.getElementById('modalTitle').textContent = animal.name + ' örökbefogadása';
            document.getElementById('modalText').textContent =
                'Köszönjük az érdeklődésed! Munkatársaink hamarosan felveszik veled a kapcsolatot ' +
                animal.name + ' örökbefogadásának részleteiről. Kérjük, várd türelemmel hívásunkat!';

            document.getElementById('modalOverlay').classList.add('active');

        btn.textContent = '✓ Kérelem elküldve';
        btn.disabled = true;
    }

        // Modal bezárása
    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
    }

        // Modal bezárása háttérre kattintva
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });