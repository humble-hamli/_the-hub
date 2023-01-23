fetch("project-data.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the accordion element
    const accordion = document.getElementById("accordion");

    // Filter Data according to tag
    const filteredData = data.filter((project) =>
      project.tags.includes("home")
    );

    // Loop through the project data
    filteredData.forEach((project, index) => {
      // Create the card element
      const card = document.createElement("div");
      card.classList.add("card");

      // Create the card header element
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header", "pl-3");
      cardHeader.id = `heading${index}`;

      const cardButton = document.createElement("button");
      cardButton.classList.add(
        "btn",
        "btn-link",
        "collapsed",
        "w-100",
        "justify-content-between",
        "d-flex",
        "align-items-center",
        "p-0"
      );
      cardButton.setAttribute("data-toggle", "collapse");
      cardButton.setAttribute("data-target", `#collapse${index}`);
      cardButton.setAttribute("aria-expanded", "false");
      cardButton.setAttribute("aria-controls", `collapse${index}`);

      const projectLabel = document.createElement("h5");
      projectLabel.classList.add("project-label", "m-0");
      projectLabel.innerHTML = index + 1;

      // Create the project title and tagline elements
      const projectTitle = document.createElement("h5");
      projectTitle.classList.add("project-title", "m-0", "pl-3");
      projectTitle.innerHTML = project.title;

      const projectTagline = document.createElement("p");
      projectTagline.classList.add("project-tagline", "m-0", "pl-3");
      projectTagline.innerText = project.tagline;

      const projectHeadYear = document.createElement("strong");
      projectHeadYear.innerHTML = project.date;
      projectHeadYear.classList.add(
        "project-head-date",
        "p2",
        "flex-fill",
        "text-right"
      );

      cardButton.append(projectLabel);
      cardButton.append(projectTitle);
      cardButton.appendChild(projectTagline);
      cardButton.appendChild(projectHeadYear);

      // Append the title and tagline to the card header

      cardHeader.appendChild(cardButton);

      // Create the card body element
      const cardBody = document.createElement("div");
      cardBody.id = `collapse${index}`;
      cardBody.classList.add("card-body", "collapse");
      cardBody.setAttribute("aria-labelledby", `heading${index}`);
      cardBody.setAttribute("data-parent", "#accordion");

      // Show cardbody according to index
      if (index + 1 === 1) {
        cardBody.classList.add("show");
      }
      // Create the row element
      const row = document.createElement("div");
      row.classList.add("row");
      // Create the col element for image
      const colImg = document.createElement("div");
      colImg.classList.add("col-md-6", "h-25");
      // Create the figure element
      const figure = document.createElement("figure");
      // Create the project image
      const projectImage = document.createElement("img");
      projectImage.classList.add("img-fluid");
      projectImage.src = project.image;
      projectImage.alt = "Project Image";
      //create the figcaption element
      const figcaption = document.createElement("figcaption");
      //append the image to the figure
      figure.appendChild(projectImage);
      figure.appendChild(figcaption);
      //append the figure to colImg
      colImg.appendChild(figure);
      //append the colImg to row
      row.appendChild(colImg);

      // Create the col element for details
      const colDetails = document.createElement("div");
      colDetails.classList.add("col-md-6");
      // Create the project title
      const projectDetailsTitle = document.createElement("h3");
      projectDetailsTitle.innerText = project.title;
      // Create the project date
      const projectDetailsDate = document.createElement("p");
      projectDetailsDate.innerHTML = `<strong>${project.date}</strong>`;
      // Create the project description
      const projectDetailsDescription = document.createElement("p");
      projectDetailsDescription.innerText = project.description;

      // Create the modal trigger button
      const modalTrigger = document.createElement("button");
      modalTrigger.classList.add("mt-3", "btn", "btn-primary", "align-bottom");
      modalTrigger.setAttribute("type", "button");
      modalTrigger.setAttribute("data-toggle", "modal");
      modalTrigger.setAttribute("data-target", `.bd-modal-${index}`);
      modalTrigger.innerText = "Projekt ansehen —>";

      //create the modal element
      const modal = document.createElement("div");
      modal.classList.add("modal", "fade", `bd-modal-${index}`);
      modal.setAttribute("tabindex", "-1");
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-labelledby", "myLargeModalLabel");
      modal.setAttribute("aria-hidden", "true");
      //create the modal dialog element
      const modalDialog = document.createElement("div");
      modalDialog.classList.add("modal-dialog", `modal-${index}`);
      //create the modal content element
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content", "h-100");
      //create the project carousel element
      const projectCarousel = document.createElement("div");
      projectCarousel.id = "carouselIndicators";
      projectCarousel.classList.add("carousel", "slide");
      projectCarousel.setAttribute("data-ride", "carousel");
      //create the carousel indicators
      const carouselIndicators = document.createElement("ol");
      carouselIndicators.classList.add("carousel-indicators");
      //create the carousel inner element
      const carouselInner = document.createElement("div");
      carouselInner.classList.add("carousel-inner");
      carouselInner.style.maxHeight = "95vh";

      //loop through the project images
      project.images.forEach((image, i) => {
        //create the indicator element
        const indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselIndicators");
        indicator.setAttribute("data-slide-to", i);
        if (i == 0) indicator.classList.add("active");
        //append the indicator to the carouselIndicators
        carouselIndicators.appendChild(indicator);
        //create the carousel item element
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (i == 0) carouselItem.classList.add("active");
        //create the carousel image element
        const carouselImage = document.createElement("img");
        carouselImage.classList.add("d-block", "w-100", "rounded");
        modal.setAttribute("width", "40");
        carouselImage.src = image;
        carouselImage.alt = "Project Image";
        //append the carousel image to carousel item
        carouselItem.appendChild(carouselImage);
        //append the carousel item to the carousel inner
        carouselInner.appendChild(carouselItem);
      });

      projectCarousel.appendChild(carouselIndicators);
      projectCarousel.appendChild(carouselInner);

      // Create Cotnrols

      // Create Previous Button
      const carouselControlsPrev = document.createElement("a");
      carouselControlsPrev.classList.add("carousel-control-prev");
      carouselControlsPrev.setAttribute("href", `#carouselIndicators`);
      carouselControlsPrev.setAttribute("role", "#button");
      carouselControlsPrev.setAttribute("data-slide", "prev");

      const carouselControlsPrevIcon = document.createElement("span");
      carouselControlsPrevIcon.classList.add("carousel-control-prev-icon");
      carouselControlsPrevIcon.setAttribute("aria-hidden", "true");

      const carouselControlsPrevSr = document.createElement("span");
      carouselControlsPrevSr.classList.add("sr-only");
      carouselControlsPrevSr.innerHTML = "Previous";

      carouselControlsPrev.appendChild(carouselControlsPrevIcon);
      carouselControlsPrev.appendChild(carouselControlsPrevSr);

      projectCarousel.appendChild(carouselControlsPrev);

      // Create Next Button
      const carouselControlsNext = document.createElement("a");
      carouselControlsNext.classList.add("carousel-control-next");
      carouselControlsNext.setAttribute("href", `#carouselIndicators`);
      carouselControlsNext.setAttribute("role", "#button");
      carouselControlsNext.setAttribute("data-slide", "next");

      const carouselControlsNextIcon = document.createElement("span");
      carouselControlsNextIcon.classList.add("carousel-control-next-icon");
      carouselControlsNextIcon.setAttribute("aria-hidden", "true");

      const carouselControlsNextSr = document.createElement("span");
      carouselControlsNextSr.classList.add("sr-only");
      carouselControlsNextSr.innerHTML = "Next";

      carouselControlsNext.appendChild(carouselControlsNextIcon);
      carouselControlsNext.appendChild(carouselControlsNextSr);

      projectCarousel.appendChild(carouselControlsNext);

      // Append the carousel indicators and inner to the modal content
      modalContent.appendChild(projectCarousel);
      // Append the modal content to the modal dialog
      modalDialog.appendChild(modalContent);
      // Append the modal dialog to the modal
      modal.appendChild(modalDialog);
      // Append the modal to the body
      row.appendChild(modal);

      // Append the project title, date and description to colDetails
      colDetails.appendChild(projectDetailsTitle);
      colDetails.appendChild(projectDetailsDate);
      colDetails.appendChild(projectDetailsDescription);
      colDetails.appendChild(modalTrigger);

      //append the colDetails to row
      row.appendChild(colDetails);

      //append the row to card body
      cardBody.appendChild(row);

      // Append the card header and body to the card element
      card.appendChild(cardHeader);
      card.appendChild(cardBody);

      // Append the card to the accordion
      accordion.appendChild(card);
    });
  });
