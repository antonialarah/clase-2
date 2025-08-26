var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("antonia lara");
                select("#aprendizaje").html("a aprender mas de illustrator y photoshop :3");
                noStroke()
            }
            function draw() {
                background(255, 216, 223);
                orbitControl();
                pointLight(255, 255, 255, valor/3, valor/2, valor/50)
                cone(valor / 3, valor/5);
                specularMaterial(255)
                shininess(50)
                metalness(1)
                fill(70,255,20)
            }
            

            function windowResized() {
                resizeCanvas(valor, valor);
            }

