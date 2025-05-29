By mistake i added the auth-frontend as a sub-module, so to clone it, write:
git clone --recurse-submodules https://github.com/krimerwool/User-authentication-System 
Or, if you've already cloned without submodules:
git submodule update --init --recursive
