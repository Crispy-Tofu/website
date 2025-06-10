import { sendEmail } from "$lib/server/emailHandler";
import { fail } from "@sveltejs/kit";


export const actions = {
  submitForm: async ({request}) => {
    const data = await request.formData();


    if (data.get('namehoney') !== '' || data.get('emailhoney') !== '') {
      return fail(400,{ }) 
    }
    
    const naam = String(data.get('naam'));
    const email = String(data.get('email'));
    const apparaat = String(data.get('apparaat'));
    const defect = String(data.get('probleem'));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {

      return fail(400, {emailerror: true, error: true, naam, apparaat, defect}) 
    }


    if (apparaat.length > 50 || defect.length > 1000) {
      return fail(400, {telangerror: true, error: true, naam, email, apparaat, defect})
    };

    sendEmail(data)
    return {success: true, naam}

  }};