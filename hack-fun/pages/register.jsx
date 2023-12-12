// Import statements for Supabase client and auth
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@supabase/auth-ui-shared';
import { createAvatar } from '@dicebear/core';
import { avataaarsSprites } from '@dicebear/avatars-avataaars-sprites';
// Function to create a new user
async function CreateUser(email, password, userName, avatarURL) {
  // Supabase configuration
  const supabaseUrl = 'https://zztdobkmxecvzbjqzxzq.supabase.co';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGRvYmtteGVjdnpianF6eHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MTYzMDMsImV4cCI6MjAxNzI5MjMwM30.k8FV7aJnv1klyi7sPP23b8IVdwJ5LvkVIqqt_tpV3OE';
  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  try {
    const { user, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Sign up error:', error.message);
    } else {
      await createProfile(user.id, userName, avatarURL);
      console.log('User created successfully:', user);
    }
  } catch (error) {
    console.error('Error during user creation:', error.message);
  }
}
function generateRandomAvatar() {
  const randomSeed = Math.random().toString();
  const avatar = createAvatar(avataaarsSprites, {
    seed: randomSeed,
  });

  return avatar.toString();
}

async function createProfile(userId, userName, avatarURL) {
  try {
    await supabase.from('userProfiles').upsert(
      [
        {
          id: userId,
          userName,
          avatarURL,
        },
      ],
      { onConflict: ['id'] }
    );
  } catch (error) {
    console.error('Error creating user profile:', error.message);
  }
}

function RegisterPage() {
  const avatarURL = generateRandomAvatar();

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const { email, password } = event.target.elements;

          await CreateUser(email.value, password.value, email.value, avatarURL);
        }}
      >
        <img src={avatarURL} alt="User Avatar" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
