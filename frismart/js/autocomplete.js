$('#typeahead').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: true,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["/data/koko.json"]
    }
});

$('#champ_recherche_inview').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: false,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["/data/koko.json"]
    }
});

$('#champ_recherche_page').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: false,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["/data/koko.json"]
    }
});

$('#champ_ville').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: true,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["./data/countries.json"]
    }
});

$('#champ_ville_inview').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: false,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["/data/countries.json"]
    }
});

$('#champ_ville_page').typeahead({
    minLength: 2,
    maxItem: 10,
    display:["item"],
    order: "asc",
    hint: false,
    accent: true,
    searchOnFocus: true,
    source: {
        ab: ["/data/countries.json"]
    }
});

$('#champ_meteo_city').typeahead({
    order: "desc",
    source: {
        data: ["Libreville","Akanda", "Owendo", "Ntoum", "Kango", "Port-Gentil", "Bitam", "Oyem", "Makokou", "Koulamoutou", "Mouila","Franceville"]
    }
});



