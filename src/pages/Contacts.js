import React from 'react'

const Contacts = () => {
  return (
    <div>
       <div class="section" id="contact">
    <div class="cc-contact-information" style="background-image: url('assets/images/contact.jpg');">
        <div class="container">
            <div class="cc-contact">
                <div class="row">
                    <div class="col-md-9">
                        <div class="card mb-0" data-aos="zoom-in">
                            <div class="h4 text-center title">Contact Me</div>
                            <div class="row">
                                <div class="col-md-6 ">
                                    <div class="card-body">
                                        <form name="form">
                                            <div class="p pb-3">
                                                <strong>Feel free to contact me </strong>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                    <i class="fa fa-user-circle"></i>
                                  </span>
                                                        <input class="form-control" type="text" name="name" placeholder="Name"  required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                    <i class="fa fa-file-text"></i>
                                  </span>
                                                        <input class="form-control" type="text" name="subject" placeholder="Subject" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                    <i class="fa fa-envelope"></i>
                                  </span>
                                                        <input class="form-control" type="text" name="email" placeholder="E-mail"  required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <textarea class="form-control" name="message" placeholder="Your Message"  required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <button class="btn btn-primary" type="submit">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <p class="mb-0">
                                            <strong>Phone</strong>
                                        </p>
                                        <p class="pb-2">+91 9392642428</p>
                                        <p class="mb-0">
                                            <strong>Email</strong>
                                        </p>
                                        <p>akhilmujam@gmail.com</p>

                                        <button class="btn btn-primary m-4">Hire me</button>
                                        <button class="btn btn-primary"><a href="assets/images/resume.pdf" class="text-white text-decoration-none">Download CV</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><br/><br/>
<br/>
    </div>
  )
}

export default Contacts
