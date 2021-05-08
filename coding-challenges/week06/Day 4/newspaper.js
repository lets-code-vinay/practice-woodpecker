var data = [
    {
      id: 'newspaper-01',
      name: 'Hindu',
      languages: [{ name: 'Tamil' }, { name: 'English' }],
      publishers: [
        {
          name: 'Ramanathan',
          address: {
            streetNumber: 123,
            district: 'Krishnagiri',
            state: 'Tamil nadu'
             },
          designation: 'Head'
        },
        {
          name: 'Shubham',
          address: {
            streetNumber: 142,
            district: 'Hyderabad',
            state: 'Telangana'
          },
          designation: 'CPO'
        }
      ]
    },   
    {
      id: 'newspaper-02',
      name: 'Times Of India',
      languages: [{ name: 'Tamil' }, { name: 'Telugu' }, { name: 'English' }],
      publishers: [
        {
          name: 'Prathiba Nair',
          address: {
            streetNumber: 409,
            district: 'Thalassery',
            state: 'Kerala'
          },
          designation: 'Deputy Publisher'
        },
        {
          name: 'Anmol Prathap',
          address: {
            streetNumber: 278,
            district: 'Mumbai',
            state: 'Maharashtra'
          },
          designation: 'Chief Technical writer'
        },
        {
          name: 'Palwinder Singh',
          address: {
            streetNumber: 985,
            district: 'Jalandhar',
            state: 'Punjab'
          },
          designation: 'Publication Manager'
        }
      ]
    }
  ];

  

  document.write("1)","  ",data[0]["name"],": &nbsp",data[0]["id"],);                                                             //Printing: Hindu: newspaper-01
  document.write( "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp", "<strong>Available in:</strong>", " ",                        //Printing: Available in:
   (data[0].languages[0].name), ", ",  (data[0].languages[1].name)                                                                //Printing: LANGUAGE: Tamil ,English

  ,"<br>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong>Publishers:</strong>  <br>",                                          //Printiong: Publishers: with Space
  " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong> 1) </strong> ",                                          //Printing: 1)           
  (data[0].publishers[0].name), ": No. ", (data[0].publishers[0].address.streetNumber),                                           //Printing: Ramanathan: No. 123
  ",", (data[0].publishers[0].address.district),  ", ", (data[0].publishers[0].address.state),                                    //Printing: Krishnagiri, Tamilnadu
  "&nbsp  / &nbsp ", (data[0].publishers[0].designation),                                                                         //printing: Degisnation

  "<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong> 2) </strong>",  (data[0].publishers[1].name),         //Printing: 2) Shubham
  "&nbsp :",   "No. &nbsp",  (data[0].publishers[1].address.streetNumber), ", &nbsp", (data[0].publishers[1].address.district)    //Printing: : No. Streetno., District
   , ", &nbsp",(data[0].publishers[1].address.state), "&nbsp / &nbsp", (data[0].publishers[1].designation),                       //printing: state / Degisnation 
  
"<br> <br> <strong> 2) </strong>", (data[1].name), ": &nbsp", (data[1].id),                                                       //Printing: Times of India: newspaper-2
"<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<strong> Available in :</strong> &nbsp", (data[1].languages[0].name),               //Printing: Available in 1; Language-01
  ", &nbsp ",  (data[1].languages[1].name) , ", &nbsp",  (data[1].languages[2].name),                                             //Printing: Language02, language-03
  
  "<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong>Publishers:</strong>  <br> ",                                            //Printing: Publishers:
   " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong> 1) </strong> ",                                         //printing: 1) sequence no.
  (data[1].publishers[0].name), ": No. &nbsp", (data[1].publishers[0].address.streetNumber), ", &nbsp",                           //Printing: Publisher_name01 No. Street no.
  (data[0].publishers[0].address.district) , ", &nbsp", (data[1].publishers[0].address.state) , "&nbsp / &nbsp",                  //printing: District, State /
(data[1].publishers[0].designation),                                                                                              //printing: Designation

"<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong> 2) </strong> ", (data[1].publishers[1].name),          //Printing: 02) Publisher name
"&nbsp : No.", (data[0].publishers[1].address.streetNumber),", &nbsp", (data[1].publishers[1].address.district),                  //Printing: StreetNumber, District
",&nbsp",(data[1].publishers[1].address.state),"&nbsp / &nbsp", (data[1].publishers[1].designation),                              //Printing: State / Designation

"<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <strong> 3) </strong>", (data[1].publishers[2].name),           //Printing: 3) Publishers_name
 "&nbsp : N0. &nbsp",(data[1].publishers[2].address.streetNumber), ", &nbsp", (data[1].publishers[2].address.district),           //printing: StreetNumber, District
 ", &nbsp", (data[1].publishers[2].address.state), "&nbsp / &nbsp",(data[1].publishers[2].designation)                            //Printing: State / Designation


 );
  document.write("<hr>");                                                                                                         //Illustrating: horizontal Line

