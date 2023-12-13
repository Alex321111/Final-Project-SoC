import React from 'react';

function CreateAccountForm() {
  return (
    <div className="form-page bg-dark-2">
      <form className="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="about_me">About Me</label>
        <textarea id="about_me" name="about_me"></textarea>

        <label htmlFor="linkedin_link">LinkedIn</label>
        <input type="text" id="linkedin_link" name="linkedin_link" />

        <label htmlFor="github_link">Github</label>
        <input type="text" id="github_link" name="github_link" />

        <label htmlFor="role_description">
          Are you a bootcamper, exbootcamper, or a mentor?
        </label>
        <input type="text" id="role_description" name="role_description" />

        <label htmlFor="skills">
          Please give us a brief summary of your skills and the tech you have
          experience with
        </label>
        <textarea id="skills" name="skills"></textarea>
        <button type="submit">Create my account</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
