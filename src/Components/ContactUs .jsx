import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Connect Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="mb-4 text-gray-600">
              We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to help.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> support@waterbuttol.com</li>
              <li><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li><strong>Location:</strong> 123 Aqua Street, EcoCity, Planet Earth</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" placeholder="Your name" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" placeholder="Your email" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea placeholder="Your message" className="textarea textarea-bordered w-full h-32"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
