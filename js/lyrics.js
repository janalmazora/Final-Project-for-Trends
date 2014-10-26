/*
Author:
	Ramolito Javier
	Jan Almazora
	Ynigo Limcangco

Final Project for Trends
*/


var beerLyrics = [
	[ [" ", 0.1] ], //intro

	[ ["Nais", 1], ["kong", 0.5], ["magpakalasing", 3.5] ],				// 1st line
	[ ["Dahil", 1.5], ["wala", 1.3], ["ka", 0.5], ["na", 1.8] ],		// 2nd line
	[ ["Nakatingin", 2.4], ["sa", 0.3], ["salamin", 2.4] ],
	[ ["At", 0.3], ["nag-iisa", 4.8] ],
	// 37.8

	[ ["Nakatanim", 2.3], ["pa", 0.2], ["rin", 0.5], ["ang", 0.3], ["gumamelang", 1.4] ],
	[ ["Binalik", 1], ["mo", 0.3], ["sa'kin", 0.6], ["nang", 0.3], ["tayo'y", 1.5], ["maghiwalay", 4] ],
	[ ["Ito'y", 0.6], ["katulad", 0.8], ["ng", 0.3], ["damdamin", 1], ["ko", 0.4] ],
	[ ["Kahit", 0.7], ["buhusan", 0.8], ["mo", 0.3], ["ng", 0.3], ["beer", 0.5], ["ayaw", 1], ["pang", 0.5], ["mamatay", 3.5] ],
	// 62.5
	//[Pre-chorus]
	[ ["Giliw,", 4], ["wag", 0.3], ["mo", 0.4], ["sanang", 1], ["limutin", 3] ],
	[ ["Ang", 0.7], ["mga", 1.3], ["araw", 0.7], ["na", 0.4], ["hindi", 0.7], ["sana", 0.9], ["naglaho", 1.6] ],
	[ ["Mga", 0.6], ["anak", 0.7], ["at", 0.3], ["bahay", 0.6], ["nating", 1.1], ["pinaplano", 2.6] ],
	[ ["Lahat", 0.8], ["ng", 0.5], ["ito'y", 0.9], ["nawala", 1.4], ["nung", 0.5], ["iniwan", 1.5], ["mo", 0.5], ["'ko", 2] ],
	[ ["Kaya", 1.5], ["ngayon", 1] ],
	// 96.3
	// [Chorus]
	[ ["Ibuhos", 1.6], ["na", 1], ["ang", 0.3], ["beer", 1.2], ["sa'king", 1.7], ["lalamunan", 4.7] ],
	[ ["Upang", 1.6], ["malunod", 1.8], ["na", 1.1], ["ang", 0.3], ["puso", 1.3], ["kong", 1.1], ["nahihirapan", 3.9] ],
	[ ["Bawat", 1.2], ["patak", 1.8], ["anong", 1], ["sarap", 1.2] ], // 124.4
	[ ["Ano", 0.15], ["ba", 1.25], ["talagang", 0.7], ["mas", 0.3], ["gusto", 0.5], ["ko", 2.5] ],
	[ ["Ang", 0.2], ["beer", 0.5], ["na", 0.2], ["'to", 0.4], ["o", 0.3], ["ang", 0.5], ["pag-ibig", 1], ["mo", 2] ],
	// 135.7

	// [Instrumental]
	[ ["", 0.5] ], // 147.7

	[ ["Nais", 1.5], ["kong", 0.8], ["magpakasabog", 3] ], // 153.5
	[ ["Dahil", 1.3], ["olats", 2.2], ["ako", 1.6] ], // 159.1
	[ ["Kahit", 1.4], ["ano", 1.2], ["hihithitin", 2.2] ], // 164.4
	[ ["Kahit", 1.3], ["tambutso", 3.7] ], // 170.4

	[ ["Kukuha", 2.1], ["ako", 0.2], ["ng", 0.4], ["beer", 0.5], ["at", 0.3], ["ipapakulo", 1.8] ], // 176.2
	[ ["Sa", 0.3], ["kaldero't", 1], ["lalanghapin", 1.5], ["ang", 0.8], ["usok", 1.1], ["nito", 2] ], // 183.1
	[ ["Lahat", 0.7], ["ay", 0.3], ["aking", 0.7], ["gagawin", 0.9] ], // 186.7
	[ ["Upang", 0.7], ["hindi", 0.6], ["ko", 0.3], ["na", 0.4], ["isiping", 0.8] ], //189.7
	[ ["Nag-iisa", 1.8], ["na", 0.5], ["ako", 2.5] ], // 194.8

	// [Repeat chorus]
	[ ["Ibuhos", 1.6], ["na", 1], ["ang", 0.3], ["beer", 1.2], ["sa'king", 1.7], ["lalamunan", 4.7] ],
	[ ["Upang", 1.6], ["malunod", 1.8], ["na", 1.1], ["ang", 0.3], ["puso", 1.3], ["kong", 1.1], ["nahihirapan", 3.9] ],
	[ ["Bawat", 1.2], ["patak", 1.8], ["anong", 1], ["sarap", 1.2] ],
	[ ["Ano", 0.15], ["ba", 1.25], ["talagang", 0.7], ["mas", 0.3], ["gusto", 0.5], ["ko", 2.5] ], // 229
	[ ["Ang", 0.2], ["beer", 0.5], ["na", 0.2], ["'to", 0.4], ["o", 0.3], ["ang", 0.5], ["pag-ibig", 1], ["mo", 2] ], // 234.4

	// [Instrumental]
	[ ["", 0.5] ], // 260.2

	// [Repeat pre-chorus]
	[ ["Giliw,", 4], ["wag", 0.3], ["mo", 0.4], ["sanang", 1], ["limutin", 3] ],
	[ ["Ang", 0.7], ["mga", 1.3], ["araw", 0.7], ["na", 0.4], ["hindi", 0.7], ["sana", 0.9], ["naglaho", 1.6] ],
	[ ["Mga", 0.6], ["anak", 0.7], ["at", 0.3], ["bahay", 0.6], ["nating", 1.1], ["pinaplano", 2.6] ],
	[ ["Lahat", 0.8], ["ng", 0.5], ["ito'y", 0.9], ["nawala", 1.4], ["nung", 0.5], ["iniwan", 1.5], ["mo", 0.5], ["'ko", 2] ],
	[ ["Kaya", 1.5], ["ngayon", 1] ], // 294

	// [Repeat chorus except the last line]
	[ ["Ibuhos", 1.4], ["na", 1.2], ["ang", 0.3], ["beer", 1.1], ["sa'king", 1.8], ["lalamunan", 4.5] ],
	[ ["Upang", 1.6], ["malunod", 1.8], ["na", 1.1], ["ang", 0.3], ["puso", 1.3], ["kong", 1.1], ["nahihirapan", 3.9] ], // 316.4
	[ ["Bawat", 1.3], ["patak", 1.7], ["anong", 1.1], ["sarap", 1.3] ], // 322.1
	[ ["Ano", 0.3], ["ba", 1], ["talagang", 0.9], ["mas", 0.4], ["gusto", 0.7], ["ko", 2.8] ], // 328.7

	[ ["Ang", 0.4], ["beer", 0.7], ["na", 0.3], ["to", 1.9] ],
	[ ["Ang", 0.4], ["beer", 0.7], ["na", 0.3], ["to", 1.8] ],
	[ ["Ang", 0.3], ["beer", 0.7], ["na", 0.2], ["to", 0.5], ["o", 0.5], ["ang...", 4.5] ],
	[ ["PAG-", 0.4], ["IBIG", 1.8], ["MO!...", 7] ]
];

var beerLineDelays = [
	13, // intro

	2.5, // intro
	0.5, // delay before display of 2rd line
	0.5, // delay before display of 3rd line
	0.5,
	
	0.5,
	0.3,
	0.5,
	0.3,
	
	0.5,
	0.3,
	0.5,
	0.5,
	0.5,
	
	0.3,
	0.5,
	0.5,
	0.5,
	0.3,

	11.5, // Instrumental 1

	0.5,
	0.5,
	0.5,
	1,

	0.5,
	0.2,
	1,
	0.2,
	0.3,

	0.5,
	0.5,
	0.5,
	0.5,
	0.3,

	25.3, //Instrumental 2

	0.5,
	0.3,
	0.5,
	0.5,
	0.5,

	0.5,
	0.5,
	0.3,
	0.5,

	0.5,
	0.3,
	0.5,
	0.5
];
// Yiee! tara, sumama ka sa akin

var biglangLikoLyrics = [
	[ ["(This", 2.1], ["is", 0.3], ["a", 0.2], ["Flip", 0.5], ["Music", 0.3], ["Exclusive)", 1] ],


	[ ["Yiee!", 1.5], ["tara!", 2.5], ["sumama", 0.3], ["ka", 0.2], ["sa 'kin", 0.2] ],
	[ ["Alam", 0.2], ["mo", 0.3], ["na", 0.8], ["dadalhin", 0.5], ["kita", 0.5], ["kung", 0.2], ["saan", 0.2], ["mo", 0.2], ["gusto", 0.2] ],
	

	[ ["Ang", 0.2], ["pawis", 0.2], ["ko'y", 0.2], ["tumatagaktak", 0.3] ],
	[ ["Sa", 0.2], ["bilis", 0.2], ["may", 0.2], ["pumapalakpak", 1] ],
	[ ["Abutin", 0.2], ["natin", 0.2], ["ang", 0.2], ["langit", 0.2], ["ibuka", 0.2],["pak-pak", 0.3]  ],
	[ ["Langhapin", 0.3], ["ang", 0.2], ["halimuyak", 0.3], ["ng", 0.2], ["mga", 0.2], ["bulaklak", 1] ],

	[ ["Ako'y", 1], ["paru", 0.5], ["-paru", 0.5], ],
	[ ["Nakadapo", 0.5], ["sa", 0.2], ["iyong", 0.3], ["damo", 1] ],
	[ ["sa", 0.2], ["liwanag", 0.2], ["nang", 0.3], ["ganda", 0.2], ["mo", 1]],
	[ ["Andaming", 1], ["nabibighaning", 0.5], ["gamo", 0.3], ["-gamo", 1], ],


	[ ["Yakapin", 1], ["mo", 0.2], ["ako", 0.2], ["habang", 0.2], ["atin", 0.2], ["ang", 0.1], ["gabi",0.2]],
	[ ["Kasi", 0.2], ["mundo", 0.2], ["natin", 0.2], ["ay", 0.1], ["laging", 0.2], ["salisi", 0.5]],
	[ ["Pag", 0.2], ["Ika'y", 0.2], ["nasa", 0.2], ["baba", 0.2], ["ako", 0.1], ["ay", 0.1], ["nasa", 0.2], ["taas", 0.5]],
	[ ["sa", 0.2], ["tuwing", 0.2], ["ikaw", 0.2], ["ay", 0.2], ["darating", 0.5], ["ako", 0.1], ["ay", 0.1], ["lalabas", 1] ],
	// Yakapin mo ako habang atin ang gabi
	// Kasi mundo natin ay laging salisi
	// Pag ika'y nasa baba ako ay nasa taas
	// Sa tuwing ikaw ay darating ako ay lalabas

	[ ["wag", 0.2], ["ka", 0.2], ["masyadong", 0.3],["marahas", 0.5]],
	[ ["Sige", 0.2], ["lang", 0.2], ["isigaw", 0.3], ["mo", 0.1], ["pa", 0.1], ["ng", 0.1], ["malakas", 1] ],
	[ ["Ilagay", 0.2], ["mo", 0.2], ["sa", 0.1], ["tono", 0.2]],
	[ ["Di", 0.2], ["kita", 0.2], ["tinatanong", 0.3], ["pero'y", 0.3], ["sagot", 0.3], ["mo", 0.1], ["oo", 0.5], ["oo", 0.3], ["oo", 0.2], ["oo", 0.7]],
	// Wag ka masyadong marahas
	// Sige lng isigaw mo pa ng malakas
	// Ilagay mo sa tono
	// Di kita tinatanong pero'y sagot mo oo oo oo oo

	[ ["hintayin", 0.2], ["mo", 0.2], ["ako", 0.5]],
	[ ["Malapit", 0.2], ["na", 0.2], ["ako", 0.2], ["sabay", 0.2],["na", 0.1],["tayo", 0.3]],
	[ ["Papunta", 0.2], ["na", 0.2], ["ko", 0.2], ["nasan", 0.2], ["ka", 0.2],["na", 0.3],["ba?", 0.3]],
	[ ["Kung", 0.2], ["ako", 0.2], ["sayo", 0.3], ["sumama", 0.2], ["ka na,", 0.3], ["tara!", 0.5]],

	// Hintayin mo ako
	// Malapit na ako sabay na tayo
	// Papunta na ko nasan ka na ba?
	// Kung ako sayo sumama ka na, tara

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 0.5], ["ay", 0.5], ["maglalakbay", 2]],
	[ ["Patungo", 0.5], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lang", 0.3], ["ang", 0.3], ["may", 0.3], ["alam", 1]],

	// Tara tara sumama ka sa akin
	// At hawakan ang aking kamay
	// Tayo ay maglalakbay
	// Patungo sa lugar kung saan tayo lang ang may alam

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 1], ["ay", 0.5], ["maglalakbay (oooohh)", 1.5]],
	[ ["Patungo", 1], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lamang", 0.7], ["ang", 0.2], ["laman", 1]],

	// Tara tara sumama ka sa akin
	// At hawakan ang aking kamay
	// Tayo ay maglalakbay (oooohh)
	// Patungo sa lugar kung saan tayo lamang ang laman

	[ ["Pinto", 0.2], ["ay", 0.2], ["sarado", 0.2], ["buksan", 0.3],["ang", 0.1], ["kandado", 0.5]],
	[ ["Talian", 0.2], ["ang", 0.2], ["aso", 0.2], ["papasukin", 1],["mo", 0.2],["na", 0.2],["ko", 0.2]],
	[ ["Meron", 0.2], ["akong", 0.2], ["regalo", 0.2], ["hindi", 0.2], ["mo", 0.2],["malilimutan", 0.3]  ],
	[ ["Matagal", 0.3], ["ko", 0.2], ["tong", 0.3], ["pinagipunan", 0.2]],

	// Pinto ay sarado buksan ang kandado
	// Talian ang aso papasukin mo na ako
	// Meron akong regalo hindi mo malilimutan
	// Matagal ko tong pinagipunan

	[ ["Pahiram", 0.1], ["ng", 0.1], ["upuan", 0.2], ["para", 0.3],["aking", 0.4], ["patungan", 0.5]],
	[ ["ng", 0.2], ["aking", 0.3], ["dala-dala", 0.5], ["na", 0.3],["aking", 0.5],["ng", 0.5],["makunan", 0.3]],
	[ ["para", 0.2], ["may", 0.3], ["alaala", 0.2], ["ka", 0.2], ["sa", 0.2],["pagalis mo", 0.3] ],
	[ ["Panuorin", 0.3], ["kung", 0.2], ["sakali'y", 0.3], ["ako", 0.2], ["ay", 0.2] ,["mamimiss", 0.2], ["mo", 0.2]],

	// Pahiram ng upuan para aking patungan
	// Ng aking dala dala na aking ng makunan
	// Para may alaala ka sa pagalis mo
	// Panuorin kung sakali'y ako ay mamimiss mo

	[ ["tayo", 0.2], ["na", 0.1], ["magsabay,", 0.2], ["magkamay", 0.3]],
	[ ["Kahit", 0.2], ["na", 0.2], ["-pagkain", 0.2], ["ay", 1],["hindi", 0.2],["sa", 0.2],["plato", 0.2], ["nakalagay", 0.5]],
	[ ["Masarap", 0.3], ["ba?", 0.2], ["dyan", 0.3], ["ako", 0.2], ["sanay", 0.2] ],
	[ ["Kaya", 0.3], ["pala", 0.2], ["mga", 0.3], ["sagot", 0.2], ["mo", 0.2] ,["akin", 0.2], ["ay", 0.2], ["panay", 1]],

	// Tayo na magsabay, magkamay
	// Kahit na pagkain ay hindi sa plato nakalagay
	// Masarap ba? dyan ako sanay
	// Kaya pala mga sagot mo sa akin ay panay

	[ ["oo hintayin", 0.7], ["mo", 0.2], ["ako", 0.5]],
	[ ["Malapit", 0.2], ["na", 0.2], ["ako", 0.2], ["sabay", 0.2],["na", 0.1],["tayo", 0.7]],
	[ ["Papunta", 0.2], ["na", 0.2], ["ko", 0.2], ["nasan", 0.2], ["ka", 0.2],["na", 0.3],["ba?", 0.3]],
	[ ["Kung", 0.2], ["ako", 0.2], ["sayo", 0.3], ["sumama", 0.2], ["ka na,", 0.3]],

	// Hintayin mo ako
	// Malapit na ako sabay na tayo
	// Papunta na ko nasan ka na ba?
	// Kung ako sayo sumama ka na, tara

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 0.5], ["ay", 0.5], ["maglalakbay", 2]],
	[ ["Patungo", 0.5], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lang", 0.3], ["ang", 0.3], ["may", 0.3], ["alam", 1]],

	// Tara tara sumama ka sa akin
	// At hawakan ang aking kamay
	// Tayo ay maglalakbay
	// Patungo sa lugar kung saan tayo lang ang may alam

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 1], ["ay", 0.5], ["maglalakbay (oooohh)", 1.5]],
	[["Patungo", 0.7], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lamang", 0.7], ["ang", 0.2], ["laman", 1]],

	[["Oh,", 1], ["nilambing", 0.5], ["mo", 0.2], ["na", 0.2], ["maghapon", 0.3]],
	[["at", 0.2], ["dinilaan", 0.5], ["ang", 0.2], ["muka", 0.3], ["mo", 0.3]],
	[["Nangangahulugan", 1], ["hindi", 0.3], ["lahat", 0.3]],
	[["ng", 0.2], ["hinihimas", 0.5], ["ay", 0.2], ["umaamo", 0.3]],

	// Oh, nilambing mo na maghapon
	// At dinilaan ang muka mo
	// Nangangahulugan hindi lahat
	// Ng hinihimas ay umaamo

	[["Aso't,", 0.8], ["pusa", 0.8], ["nagkalmutan", 0.5]],
	[["Nagaway", 1], ["nakauntugan", 0.5]],
	[["Bagong", 1.3], ["taon", 0.3], ["ba", 0.3],["ngayon?", 0.5]],
	[["Bat", 0.5], ["ganun", 0.3], ["may", 0.3], ["nakakaputukan", 0.2]],
	// Aso't pusa nagkalmutan
	// Nagaway nakauntugan
	// Bagong taon ba ngaun?
	// Bat ganun may nakakaputukan

	[["Sumibak", 0.3], ["ng", 0.2], ["kahoy", 0.3],["para",0.3],["panggatong", 0.5]],
	[["para", 0.5], ["may", 0.3],["apoy", 0.3],["tayo", 0.3],["maghapon", 0.]],
	[["sakto ah,", 0.5], ["may", 0.2], ["sweldo", 0.3],["pa", 0.2], ["ako", 0.5]],
	[["Magwwithdraw", 0.7], ["muna", 0.2], ["ko", 0.2], ["sa", 0.2],["banko", 0.5]],

	// Sumibak ng kahoy para panggatong
	// Para may apoy tayo maghapon
	// Sakto ah, may sweldo pa ako
	// Magwwithdraw muna ko sa banko

	[ ["oo hintayin", 0.7], ["mo", 0.2], ["ako", 0.5]],
	[ ["Malapit", 0.2], ["na", 0.2], ["ako", 0.2], ["sabay", 0.2],["na", 0.1],["tayo", 0.7]],
	[ ["Papunta", 0.2], ["na", 0.2], ["ko", 0.2], ["nasan", 0.2], ["ka", 0.2],["na", 0.3],["ba?", 0.3]],
	[ ["Kung", 0.2], ["ako", 0.2], ["sayo", 0.3], ["sumama", 0.2], ["ka na,", 0.3]],

	// Hintayin mo ako
	// Malapit na ako sabay na tayo
	// Papunta na ko nasan ka na ba?
	// Kung ako sayo sumama ka na, tara

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 0.5], ["ay", 0.5], ["maglalakbay", 2]],
	[ ["Patungo", 0.5], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lang", 0.3], ["ang", 0.3], ["may", 0.3], ["alam", 1]],

	// Tara tara sumama ka sa akin
	// At hawakan ang aking kamay
	// Tayo ay maglalakbay
	// Patungo sa lugar kung saan tayo lang ang may alam

	[ ["Tara", 1], ["Tara", 1], ["sumama", 0.7], ["ka sakin", 1]],
	[ ["at", 0.5], ["hawakan", 0.7], ["ang", 0.5], ["aking", 0.5],["kamay", 1]],
	[ ["tayo", 1], ["ay", 0.5], ["maglalakbay (oooohh)", 1.5]],
	[["Patungo", 0.7], ["sa", 0.5], ["lugar", 0.5], ["kung", 0.3], ["saan", 0.3], ["tayo", 0.3], ["lamang", 0.7], ["ang", 0.2], ["laman", 1]],

	[ ["(Diretso lang ♪♫)", 13], ["biglang liko ♪♫", 8]],

];

var biglangLikoLineDelays = [
	15, // intro
	
	0.5,
	1.9,

	4.7, // ang pawis ko'y....
	0.2,
	0.2,
	0.2,
	
	0.2, // ako ay paru-paro
	0.2,
	0.2,
	0.2,
	
	0.2, // yakapin mo ako
	0.2,
	0.2,
	0.2,

	0.2, // wag ka masyadong
	0.2,
	0.2,
	0.2,

	0.5, // hintayin mo ako
	0.5,
	0.2,
	0.2,

	0.5, // tara tara 
	0.5,
	0.2,
	0.2,

	0.5, // tara tara 
	0.5,
	0.2,
	0.2,

	0.5, // pinto ay sarado 
	0.5,
	0.2,
	0.2,

	0.5, // pahiram ng 
	0.5,
	0.2,
	0.2,

	0.5, // tayo na magsabay
	0.5,
	0.2,
	0.2,

	0.5, // oo hintayin mo ako
	0.5,
	0.2,
	0.2,

	0.5, // tara tara 
	0.5,
	0.2,
	0.2,

	0.5, // tara tara 
	0.5,
	0.2,
	0.2,

	0.5, // oh nilambing
	0.5,
	0.2,
	0.2,

	0.5, // asot pusa
	0.5,
	0.2,
	0.2,

	0.5, // sumibak ng 
	0.5,
	0.2,
	0.2,

	0.8, // oo hintayin mo ako
	0.5,
	0.2,
	0.2,

	0.5, // tara tara 	
	0.5,
	0.2,
	0.2,

	1, // tara tara 
	0.5,
	0.2,
	0.2,

	0.5,
	10,
];