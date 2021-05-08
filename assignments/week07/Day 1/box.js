












particlesJS('particle',

{
    "particles":{
        "number":{
            "value":80,
            "density":{
                "enable": true,
                   "value_area":800
            }
        },
        "color" : {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke" : {
                "width": 0,
                "color": "#000000"
            },
            "polygon" : {
                "nb_sides": 5
            },
            "image" : {
                "src" : "img/github.svg",
                "width" : 100,
                "height": 100
            }
        },
        "opacity" : {
            "value" : 0.5,
            "random" : false,
            "anim": {
                "enable" : false,
                "speed" : 1,
                "opacity_min" : 0.1,
                "sync" : false
            }
        },
        "size" : {
            "value" : 5,
            "random" : true,
                "anim" : {
                    "enable" : false,
                     "speed" : 40,
                     "size_min" : 0.1,
                    "sync" : false
                    }
        },
        "lone_linked" : {
            "enable" : true,
            "distance" : 150,
            "color" : "#ffffff",
            "opacity" : 0.4,
            "widht" : 1
        },
        "move" : {
            "enable" : true,
            "speed" : 6,
            "direction" : "none",
            "random" : false,
            "straight" : false,
            "out_mode" : "out",
            "attract" : {
                "enable" : false,
                "rotateX" : 600,
                "rotateY" : 1200
            } 
        }
    },
    "interactivity" : {
        "detect_on": "canvas",
        "event" : {
            "onhover" : {
                "enable" : true,
                "mode" : "repulse"
            },
            "onclick" : {
                "enable" : true,
                "mode" : "push" 
            },
            "resize": true,
        },
        "mode" : {
            "grab" : {
                "distance" : 400,
                "line_linked" : {
                    "opacity" : 1
                }
            },
        "bubble" : {
            "distance" : 400,
            "size" : 40,
            "duraction" : 2,
            "opacity" : 2,
            "speed" : 3                
        },
            "repulse" : {
                "distance" : 200
            },
            "push" : {
                "particles_nb" : 4
            },
            "remove" : {
                "particles_nb" : 2
            }
        }
    },
    "retina_detect" : true,
    "config_demo" : {
        "hide_card" : false,
        "background_color": "#333",
        "background_image" : " ",
        "background_position" : "50% 50%",
        "background-repeat" : "no-repeat",
        "background_size": "cover"
    }
}

);

const boxname = document.querySelector('#boxname')
const boxcolor = document.querySelector('#boxcolor')
const form = document.querySelector('form')
const sections = document.querySelector('.addboxes')
const submit = document.querySelector('#button')

let block = 0
form.onsubmit = (e) => {
    e.preventDefault()
    let box = document.createElement('div')
    box.textContent = boxname.value
    sections.appendChild(box)
    styles(box)
    block = ++block
    if(block === 5){
        submit.setAttribute('disabled',' ')
    }else{
        if(submit.hasAttribute('disabled')){
            submit.removeAttribute('disabled')
        }
    }
}



let styles = (prop) => {
    prop.style.widht = 100 +'px'
    prop.style.height = 100 + 'px'
    prop.style.textAlign = 'center'
    prop.style.color = 'white'
    prop.style.display = 'flex'
    prop.style.justifyContent = 'center'
    prop.style.alignItems = 'center'
    prop.style.verticalAlign = 'middle'
    prop.style.fontSize = .9 +'em'
    prop.style.padding = 10 + 'px'
    prop.style.backgroundColor = '#' + Number(boxcolor.value)
}