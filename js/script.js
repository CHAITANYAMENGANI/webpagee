
document.addEventListener("DOMContentLoaded", () => {

    const config = weddingConfig;

    // =====================================
    // CLIENT INFORMATION
    // =====================================

    document.title =
        `${config.couple.bride} & ${config.couple.groom} | Wedding Invitation`;

    document.getElementById("introNames").textContent =
        `${config.couple.bride} & ${config.couple.groom}`;

    document.getElementById("heroBlessing").textContent =
        config.message.blessing;

    document.getElementById("brideName").textContent =
        config.couple.bride;

    document.getElementById("groomName").textContent =
        config.couple.groom;

    document.getElementById("heroSubtitle").textContent =
        config.message.subtitle;

    document.getElementById("brideParents").textContent =
        config.couple.brideParents;

    document.getElementById("groomParents").textContent =
        config.couple.groomParents;

    document.getElementById("venueName").textContent =
        config.venue.name;

    document.getElementById("venueAddress").textContent =
        config.venue.address;

    const formattedDate = new Date(
        `${config.couple.weddingDate}T00:00:00`
    );

    const dateOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric"
    };

    const dateText = formattedDate.toLocaleDateString(
        "en-IN",
        dateOptions
    );

    document.getElementById("weddingDate").textContent =
        dateText;

    document.getElementById("introDate").textContent =
        formattedDate.toLocaleDateString(
            "en-IN",
            dateOptions
        ).toUpperCase();

    document.getElementById("saveDateNames").textContent =
        `${config.couple.bride} & ${config.couple.groom}`;

    document.getElementById("footerNames").textContent =
        `${config.couple.bride} & ${config.couple.groom}`;


    // OPEN INVITATION is handled by an isolated script in index.html.
    // This keeps the envelope working even if another page section has an error.


    // =====================================
    // BLESSINGS OF ELDERS
    // =====================================

    const blessings = config.blessings;

    const ganeshaImage =
        document.getElementById("ganeshaImage");

    // Run only when the new blessings HTML exists
    if (ganeshaImage) {

        ganeshaImage.src = blessings.ganeshaImage;

        document.getElementById("ganeshaMantra").textContent =
            blessings.mantra;

        document.querySelector(".blessing-title").textContent =
            blessings.heading;

        document.getElementById("brideGrandparentsLabel").textContent =
            blessings.brideGrandparents.label;

        document.getElementById("groomGrandparentsLabel").textContent =
            blessings.groomGrandparents.label;

        function renderGrandparents(containerId, names) {

            const container =
                document.getElementById(containerId);

            container.innerHTML = "";

            names.forEach(name => {

                const paragraph = document.createElement("p");

                paragraph.textContent = name;

                container.appendChild(paragraph);

            });

        }

        renderGrandparents(
            "brideGrandparentsNames",
            blessings.brideGrandparents.names
        );

        renderGrandparents(
            "groomGrandparentsNames",
            blessings.groomGrandparents.names
        );

    }


    // =====================================
    // WEDDING DAY SCHEDULE
    // =====================================

    const schedule = config.weddingSchedule;

    const scheduleList =
        document.getElementById("scheduleList");

    // Run only when schedule HTML exists
    if (scheduleList) {

        document.getElementById("scheduleHeading").textContent =
            schedule.heading;

        document.getElementById("scheduleDate").textContent =
            schedule.date;

        scheduleList.innerHTML = "";

        schedule.ceremonies.forEach(ceremony => {

            const item = document.createElement("div");
            item.className = "schedule-item";

            const icon = document.createElement("div");
            icon.className = "schedule-icon";

            const image = document.createElement("img");

            image.src = ceremony.image;
            image.alt = ceremony.name;
            image.loading = "lazy";

            image.onerror = () => {
                image.style.display = "none";
                icon.textContent = "✧";
            };

            icon.appendChild(image);

            const details = document.createElement("div");
            details.className = "schedule-details";

            const time = document.createElement("p");
            time.className = "schedule-time";
            time.textContent = ceremony.time;

            const name = document.createElement("h3");
            name.className = "schedule-event-name";
            name.textContent = ceremony.name;

            details.append(time, name);
            item.append(icon, details);

            scheduleList.appendChild(item);

        });

    }



    // =====================================
    // MUSIC CONTROL
    // =====================================

    musicButton.addEventListener("click", () => {

        if (music.paused) {

            if (config.music.enabled) {

                music.play().catch(() => {});

            }

        } else {

            music.pause();

        }

    });

    music.addEventListener("play", () => {

        musicButton.textContent = "♫";

    });

    music.addEventListener("pause", () => {

        musicButton.textContent = "♪";

    });


    // =====================================
    // INTERACTIVE LOVE EXPERIENCE
    // =====================================

    const yesButton =
        document.getElementById("yesButton");

    const noButton =
        document.getElementById("noButton");

    const proposalMessage =
        document.getElementById("proposalMessage");

    const proposalActions =
        document.getElementById("proposalActions");

    const proposalSuccess =
        document.getElementById("proposalSuccess");

    const proposalQuestion =
        document.getElementById("proposalQuestion");

    const loveHeart =
        document.getElementById("loveHeart");

    // Dynamic couple signature

    const successSignature =
        proposalSuccess.querySelector(".success-signature");

    successSignature.textContent =
        `WITH LOVE, ${config.couple.bride.toUpperCase()} & ${config.couple.groom.toUpperCase()}`;

    yesButton.addEventListener("click", () => {

        proposalActions.classList.add("hidden");

        proposalMessage.classList.add("hidden");

        proposalQuestion.classList.add("hidden");

        loveHeart.classList.add("hidden");

        proposalSuccess.classList.remove("hidden");

    });

    noButton.addEventListener("click", () => {

        proposalMessage.textContent =
            "Even if you cannot join us, your love and blessings will always be with us. Thank you! ♡";

        noButton.textContent = "SEND WITH LOVE";

        noButton.disabled = true;

        noButton.style.opacity = "0.65";

    });


    // =====================================
    // COUNTDOWN
    // =====================================

    const targetDate = new Date(
        `${config.couple.weddingDate}T${config.couple.weddingTime}`
    );

    function updateCountdown() {

        const now = new Date();

        const difference =
            targetDate.getTime() - now.getTime();

        if (difference <= 0) {

            document.getElementById("countdown").innerHTML =
                "<h3>Today is the beautiful beginning! ♡</h3>";

            return;

        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);


    // =====================================
    // ROYAL ILLUSTRATED EVENT COLLECTION
    // =====================================

    const eventList =
        document.getElementById("eventList");

    eventList.innerHTML = "";

    config.events.forEach(event => {

        const card = document.createElement("article");

        card.className = "event-gallery-card";

        // Event image

        const image = document.createElement("img");

        image.src = event.image;

        image.alt = `${event.category} - ${event.name}`;

        image.loading = "lazy";

        image.onerror = () => {

            image.style.display = "none";

            card.style.background =
                "linear-gradient(145deg, #f0e3ce, #d9c29c)";

        };

        // Information panel

        const panel = document.createElement("div");

        panel.className = "event-info-panel";

        const title = document.createElement("h3");

        title.className = "event-script-title";

        title.textContent = event.name;

        const category = document.createElement("p");

        category.className = "event-category";

        category.textContent = event.category;

        const date = document.createElement("p");

        date.className = "event-card-date";

        date.textContent = event.date;

        const time = document.createElement("p");

        time.className = "event-card-time";

        time.textContent = event.time;

        panel.append(
            title,
            category,
            date,
            time
        );

        card.append(image, panel);

        eventList.appendChild(card);

    });


    // =====================================
    // GOOGLE MAPS
    // =====================================

    document.getElementById("mapLink").href =
        config.venue.mapsUrl;


    // =====================================
    // WHATSAPP RSVP
    // =====================================

    const whatsappMessage = encodeURIComponent(
        config.contact.whatsappMessage
    );

    document.getElementById("whatsappLink").href =
        `https://wa.me/${config.contact.whatsappNumber}?text=${whatsappMessage}`;

});
