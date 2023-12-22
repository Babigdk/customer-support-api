import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SupportRequest from 'App/Models/SupportRequest';
import User from 'App/Models/User';

export default class SupportsController {

  public async index({ response }: HttpContextContract) {
    const supportRequests = await SupportRequest.query().preload('user');
    return response.json(supportRequests);
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'userId',
        'first_name',
        'last_name',
        'email_address',
        'support_message_title',
        'support_message_text',
        'file_path',
      ]);

      const user = await User.findOrFail(data.userId);

      const supportRequest = await SupportRequest.create({
        userId: user.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email_address: data.email_address,
        support_message_title: data.support_message_title,
        support_message_text: data.support_message_text,
        file_path: data.file_path || null,
      });

      return response.status(201).json(supportRequest);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
