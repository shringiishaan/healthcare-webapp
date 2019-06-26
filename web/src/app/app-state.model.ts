
class AppState {
     
     timestamp: string

     patient: {
          name: string
          email: string
          phone: string
          age: number
     }

     medical_condition: {
          heart_disease: boolean
          diabetics: boolean
          blood_pressure: {
               high_bp: boolean
               low_bp: boolean
          }          
     }

     health_status: {
          height: string
          weight: string
          pulse_rate: string
          bp: string
          bmi: number
     } 
}