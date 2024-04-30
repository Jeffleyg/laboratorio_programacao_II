$(document).ready(function(){
    $('#changeThemeButton').click(changeTheme);
    $('#addCourseButton').click(addCourseByUser);

    let isLightTheme = false;

    const coursesData = [
        {
            name: "Engenharia de Computação",
            details: "Turno: Integral | Coordenação: Prof. Giancarlo"
        },
        {
            name: "Administração",
            details: "Turno: Noturno | Coordenação: Prof. Humberto"
        }
    ];

    const coursesContainer = $("#courses");
    const siteTitle = $("#site-title");

    addCoursesWithButtons();

    function addCourseByUser() {
        const newCourseName = prompt("Digite o nome do novo curso:");
        const newCourseDetails = prompt("Digite os detalhes do novo curso:");
        
        if (newCourseName && newCourseDetails) {
            const newCourse = {
                name: newCourseName,
                details: newCourseDetails
            };

            coursesData.push(newCourse);

            addCoursesWithButtons();
        } else {
            alert("Por favor, preencha o nome e os detalhes do curso.");
        }
    }

    function addCoursesWithButtons() {
        coursesContainer.empty();

        coursesData.forEach((course, index) => {
            const courseButton = $("<button>").addClass("course-button btn btn-outline-primary").attr("data-course-index", index).text(course.name);
            coursesContainer.append($('<div>').addClass('col-md-6').append(courseButton));

            courseButton.click(function() {
                const courseIndex = parseInt($(this).attr("data-course-index"));
                showCourse(courseIndex);
            });

            updateButtonColor(courseButton, isLightTheme);
        });
    }

    function showCourse(courseIndex) {
        const course = coursesData[courseIndex];

        const courseDetails = $("<div>").addClass("course-details");
        showCourseDetails(courseDetails, course);

        $(".course-details").remove();

        coursesContainer.append(courseDetails);
    }

    function showCourseDetails(container, course) {
        const courseDetailsHeader = $("<h2>").text(course.name);
        container.append(courseDetailsHeader);

        const courseDetailsText = $("<p>").text(course.details);
        container.append(courseDetailsText);

        const semestersHeader = $("<header>").addClass("semester-header").text("Semestres:");
        container.append(semestersHeader);

        for (let i = 1; i <= 8; i++) {
            const semesterHeader = $("<header>").addClass("semester-header").text(`Semestre ${i}`);
            container.append(semesterHeader);
        }
    }

    function changeTheme() {
        isLightTheme = !isLightTheme;
        $("body").toggleClass("light-theme", isLightTheme);
        updateTextColors(isLightTheme);

        $(".course-button").each(function() {
            updateButtonColor($(this), isLightTheme);
        });
    }

    function updateTextColors(isLight) {
        const textColor = isLight ? '#222' : '#fff';
        $(".course-header, .semester-header").css("color", textColor);
    }

    function updateButtonColor(button, isLight) {
        const buttonColor = isLight ? '#009933' : '#fff';
        const textColor = isLight ? '#fff' : '#222';
        button.css({"background-color": buttonColor, "color": textColor});
    }

});
