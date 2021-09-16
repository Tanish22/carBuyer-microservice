const cars = {

  speedtail: {
      make : 'MCLAREN',
      model : 'Speedtail',
      purpose : 'Grand Touring',
      powertrain : 
          {
              displacement : '4l Twin-Turbo V8',
              power : '1000hp',
              type : 'Hybrid',
              performance : {
                                  acceleration_60_MPH : '2.5 sec',
                                  speed : 250   
                            }
          },  
    
  },
  
  vulcan: {
      make : 'ASTON MARTIN',
      model : 'Vulcan',
      purpose : 'Track',
      powertrain :    
          {
              displacement : '7.5l NA V12',
              power : '800hp',
              type : 'Combustion',
              performance : {
                                  acceleration_60_MPH : '2.8 sec',
                                  speed : 225   
                            }
          },
      
  },
  
  p1gtr: {
      make : 'MCLAREN',
      model : 'P1 GTR',
      purpose : 'Track',
      powertrain : 
          {
              displacement : '4l TwinTurbo v8',
              power : '1050hp',
              type : 'Hybrid',
              performance : {
                                  acceleration_60_MPH : '2.5 sec',
                                  speed : 217   
                            }
          },
  
  },
  
  portofino: {
      make : 'FERRARI',
      model : 'Portofino',
      purpose : 'Grand Touring',
      powertrain : 
          {
              displacement : '3.9l TwinTurbo V8',
              power : '591hp',
              type : 'Combustion',
              performance : {
                                  acceleration_60_MPH : '3.5 sec',
                                  speed : 199   
                            }
          },
    
  },
  
  battista: {
      make : 'PINNINFARINA',
      model : 'BATTISTA',
      purpose : 'Grand Touring',
      powertrain : 
          {
              motor : '4 liquid-cooled synchronous magnetic motors',
              power : '1900hp',
              type : 'Electric',
              performance : {
                                  acceleration_60_MPH : '1.9 sec',
                                  speed : 217   
                            } 
          },
  },
  
  evija: {
      _id : "lotus-evija",
      make : "Lotus",
      model : "Evija",
      purpose : "Track",
      powertrain : {
              motor : "4 e-motors with 493hp each",
              power : "1970hp",
              type : "Electric",
              performance : {
                      acceleration_0_60_MPH : "<3 sec",
                      speed : ">200 mph"
              }
      },     
  }
}

module.exports = cars;