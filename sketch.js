     var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Antonia Lara");
                select("#aprendizaje").html("a usar programas de adobe");
                noStroke();
            }
            function draw() {
                background(255, 216, 223);
                orbitControl();
                pointLight(255, 255, 255, 50)
                specularMaterial(255)
                shininess(50);
                metalness(1);
                fill(255,255,255)
                cylinder(valor / 2, valor/3);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }