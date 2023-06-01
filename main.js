
$(document).ready( () => {

    // BOTON PANTALLA PRINCIPAL CALCULO DE MATERIALES
            $("#btncalculo").on("click",()=>{
                $("#popup").fadeIn("slow")
            })

            $("#close").on("click", () => {
                $("#popup").fadeOut("slow");
            })
    // BOTON PANTALLA PRINCIPAL CALCULO DE MATERIALES


    // BOTON PANTALLA PISOS LAMINADOS
            $("#pisoslam").on("click",()=>{
                $("#boxmain").fadeOut("slow");
                setTimeout(() => {
                    $("#boxpl").fadeIn("slow");
                },1000);
            })
            $("#closepl").on("click", () => {
                $("#popup").fadeOut("slow");
            });
            
            $("#backone").on("click", () => {
                $("#boxpl").fadeOut("slow");
                setTimeout(()=>{
                    $("#boxmain").fadeIn("slow");
                },1000);
                
            })

            let entradam2 = document.getElementById("m2pisoslaminados").value;
            let vlrm2 = document.getElementById("preciom2pisoslaminados").value;
            $("#botoncalcular1").on("click" ,() => {
                let res = entradam2 / 1.9;
                $("#m2caja").html(Math.round(res));
            })
    // BOTON PANTALLA PISOS LAMINADOS
})