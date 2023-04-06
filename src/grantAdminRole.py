import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth


cred = credentials.Certificate("path/to/API.json")
firebase_admin.initialize_app(cred)


def set_custom_claims(uid):
    try:
        # Get the user to set custom claims for
        user = auth.get_user(uid)

        # Set custom claims for the user
        auth.set_custom_user_claims(user.uid, {'role': "admin"})

        # Update the user with custom claims
        auth.update_user(user.uid, custom_claims={'role': "admin"})

        print(f'Custom claims have been set for user {user.email}')
    except Exception as e:
        print(f'Error setting custom claims: {str(e)}')

set_custom_claims("dummy user uid")