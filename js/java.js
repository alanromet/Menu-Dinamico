$(document).ready(function(){
    function ocultar(){
        $('#caja').fadeOut(200);
    };
    function mostrar(){
        $('#caja').fadeIn(500);
    };
    ocultar();
    mostrar();
    $('#btn1').on('mouseenter',function(){
        ocultar()
        mostrar()
        $('#titulo').text("Crecimiento Profesional");
        $('#descripcion').text('Descripcion de Crecimiento Profesional');
    });
    $('#btn2').on('mouseenter',function(){
        ocultar()
        mostrar()
        $('#titulo').text("Tecnologia e Innovacion");
        $('#descripcion').text('Descripcion de Crecimiento Profesional');
    });
    $('#btn3').on('mouseenter',function(){
        ocultar()
        mostrar()
        $('#titulo').text("Produccion Audiovisual");
        $('#descripcion').text('Descripcion de Crecimiento Profesional');
    });
    $('#btn4').on('mouseenter',function(){
        ocultar()
        mostrar()
        $('#titulo').text("Desarrollo y Diseño Web");
        $('#descripcion').text('Descripcion de Crecimiento Profesional');
    });
    $('#btn5').on('mouseenter',function(){
        ocultar()
        mostrar()
        $('#titulo').text("Programacion orienta a objetos");
        $('#descripcion').text('Descripcion de Crecimiento Profesional');
    });
});