{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/21.11-pre.tar.gz") {} }:
with pkgs;

mkShell {
  packages = [ nodejs-14_x ];
}
