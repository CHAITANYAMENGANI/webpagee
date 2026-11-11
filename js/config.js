
const weddingConfig = {
    brand: "Mangalyam Invitations",

    couple: {
        bride: "Ananya",
        groom: "Arjun",
        brideParents: "Mr. & Mrs. Sharma",
        groomParents: "Mr. & Mrs. Reddy",
        weddingDate: "2027-02-14",
        weddingTime: "10:30 AM"
    },

    message: {
        title: "Two Hearts, One Beautiful Journey",
        subtitle: "Together with our families, we invite you to celebrate our wedding.",
        blessing: "With the blessings of Lord Ganesha"
    },

    venue: {
        name: "The Grand Palace Convention",
        address: "Hyderabad, Telangana, India",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hyderabad"
    },

    contact: {
        whatsappNumber: "919876543210",
        whatsappMessage: "Hello! I would like to confirm my presence at the wedding of Ananya and Arjun."
    },

    music: {
        enabled: true,
        file: "assets/audio/wedding-music.mp3"
    },

    // =====================================
    // WEDDING EVENTS
    // =====================================

    events: [
        {
            name: "Rangi Baithak",
            category: "MEHENDI",
            date: "Tuesday, 9 February 2027",
            time: "11:00 AM",
            image: "assets/images/events/mehendi.jpg",
            description: "A beautiful celebration of henna and traditions."
        },
        {
            name: "Turmeric Tales",
            category: "HALDI",
            date: "Wednesday, 10 February 2027",
            time: "12:00 PM",
            image: "assets/images/events/haldi.jpg",
            description: "A golden celebration filled with joy and blessings."
        },
        {
            name: "Shaam Shandaar",
            category: "SANGEET",
            date: "Wednesday, 10 February 2027",
            time: "7:00 PM",
            image: "assets/images/events/sangeet.jpg",
            description: "An evening of music, dance and celebration."
        },
        {
            name: "Woven in Vows",
            category: "WEDDING",
            date: "Thursday, 11 February 2027",
            time: "9:30 AM onwards",
            image: "assets/images/events/wedding.jpg",
            description: "The beginning of our forever."
        }
    ],

    // =====================================
    // BLESSINGS OF ELDERS
    // =====================================

    blessings: {
        heading: "With the Blessings of",
        ganeshaImage: "assets/images/ganesha.jpg",
        mantra: "ॐ श्री गणेशाय नमः",

        brideGrandparents: {
            label: "GRANDPARENTS OF THE BRIDE",
            names: [
                "Late Smt. Kanta Jopgal & Shri. Tulsidas Jopgal",
                "Late Smt. G.V.S.L. Somidevamma & Late Shri. G.S.L.N. Somayajulu"
            ]
        },

        groomGrandparents: {
            label: "GRANDPARENTS OF THE GROOM",
            names: [
                "Smt. Shashi Tripathi & Dr. Diwakar Tripathi"
            ]
        }
    },

    // =====================================
    // WEDDING DAY SCHEDULE
    // =====================================

    weddingSchedule: {
        heading: "Wedding-day schedule",
        date: "THURSDAY, 11 FEBRUARY 2027",

        ceremonies: [
            {
                name: "Sehrabandi",
                time: "9:30 AM",
                image: "assets/images/schedule/sehra-bandi.png"
            },
            {
                name: "Arrival of Barat",
                time: "10:00 AM",
                image: "assets/images/schedule/baraat.png"
            },
            {
                name: "Varmala",
                time: "10:30 AM",
                image: "assets/images/schedule/varmala.png"
            },
            {
                name: "Wedding Ceremony (Muhurtam)",
                time: "12:04 PM",
                image: "assets/images/schedule/wedding-ceremony.png"
            },
            {
                name: "Vidai",
                time: "5:00 PM",
                image: "assets/images/schedule/vidaai.png"
            }
        ]
    }

};

// Compatibility with existing script.js code
const config = weddingConfig;
