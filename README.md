snyk-issues-cli
=================

Snyk Issues CLI utility to fetch Snyk issues from a group


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/snyk-issues-cli.svg)](https://npmjs.org/package/snyk-issues-cli)
[![Downloads/week](https://img.shields.io/npm/dw/snyk-issues-cli.svg)](https://npmjs.org/package/snyk-issues-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g snyk-issues-cli
$ snyk-issues COMMAND
running command...
$ snyk-issues (--version)
snyk-issues-cli/0.0.0 darwin-arm64 node-v20.12.2
$ snyk-issues --help [COMMAND]
USAGE
  $ snyk-issues COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`snyk-issues autocomplete [SHELL]`](#snyk-issues-autocomplete-shell)
* [`snyk-issues help [COMMAND]`](#snyk-issues-help-command)
* [`snyk-issues plugins`](#snyk-issues-plugins)
* [`snyk-issues plugins add PLUGIN`](#snyk-issues-plugins-add-plugin)
* [`snyk-issues plugins:inspect PLUGIN...`](#snyk-issues-pluginsinspect-plugin)
* [`snyk-issues plugins install PLUGIN`](#snyk-issues-plugins-install-plugin)
* [`snyk-issues plugins link PATH`](#snyk-issues-plugins-link-path)
* [`snyk-issues plugins remove [PLUGIN]`](#snyk-issues-plugins-remove-plugin)
* [`snyk-issues plugins reset`](#snyk-issues-plugins-reset)
* [`snyk-issues plugins uninstall [PLUGIN]`](#snyk-issues-plugins-uninstall-plugin)
* [`snyk-issues plugins unlink [PLUGIN]`](#snyk-issues-plugins-unlink-plugin)
* [`snyk-issues plugins update`](#snyk-issues-plugins-update)
* [`snyk-issues sync group [GROUPID]`](#snyk-issues-sync-group-groupid)
* [`snyk-issues sync org [FILE]`](#snyk-issues-sync-org-file)

## `snyk-issues autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ snyk-issues autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ snyk-issues autocomplete

  $ snyk-issues autocomplete bash

  $ snyk-issues autocomplete zsh

  $ snyk-issues autocomplete powershell

  $ snyk-issues autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.17/src/commands/autocomplete/index.ts)_

## `snyk-issues help [COMMAND]`

Display help for snyk-issues.

```
USAGE
  $ snyk-issues help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for snyk-issues.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `snyk-issues plugins`

List installed plugins.

```
USAGE
  $ snyk-issues plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ snyk-issues plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/index.ts)_

## `snyk-issues plugins add PLUGIN`

Installs a plugin into snyk-issues.

```
USAGE
  $ snyk-issues plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into snyk-issues.

  Uses bundled npm executable to install plugins into /Users/uday/.local/share/snyk-issues

  Installation of a user-installed plugin will override a core plugin.

  Use the SNYK_ISSUES_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SNYK_ISSUES_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ snyk-issues plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ snyk-issues plugins add myplugin

  Install a plugin from a github url.

    $ snyk-issues plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ snyk-issues plugins add someuser/someplugin
```

## `snyk-issues plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ snyk-issues plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ snyk-issues plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/inspect.ts)_

## `snyk-issues plugins install PLUGIN`

Installs a plugin into snyk-issues.

```
USAGE
  $ snyk-issues plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into snyk-issues.

  Uses bundled npm executable to install plugins into /Users/uday/.local/share/snyk-issues

  Installation of a user-installed plugin will override a core plugin.

  Use the SNYK_ISSUES_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SNYK_ISSUES_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ snyk-issues plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ snyk-issues plugins install myplugin

  Install a plugin from a github url.

    $ snyk-issues plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ snyk-issues plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/install.ts)_

## `snyk-issues plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ snyk-issues plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ snyk-issues plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/link.ts)_

## `snyk-issues plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ snyk-issues plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snyk-issues plugins unlink
  $ snyk-issues plugins remove

EXAMPLES
  $ snyk-issues plugins remove myplugin
```

## `snyk-issues plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ snyk-issues plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/reset.ts)_

## `snyk-issues plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ snyk-issues plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snyk-issues plugins unlink
  $ snyk-issues plugins remove

EXAMPLES
  $ snyk-issues plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/uninstall.ts)_

## `snyk-issues plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ snyk-issues plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snyk-issues plugins unlink
  $ snyk-issues plugins remove

EXAMPLES
  $ snyk-issues plugins unlink myplugin
```

## `snyk-issues plugins update`

Update installed plugins.

```
USAGE
  $ snyk-issues plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/update.ts)_

## `snyk-issues sync group [GROUPID]`

Snyk Group issues syncronisation

```
USAGE
  $ snyk-issues sync group [GROUPID] [-f]

ARGUMENTS
  GROUPID  Snyk Group ID for which to sync issues at group level

FLAGS
  -f, --force  Force syncronisation

DESCRIPTION
  Snyk Group issues syncronisation

EXAMPLES
  $ snyk-issues sync group
```

_See code: [src/commands/sync/group.ts](https://github.com/udaykor/snyk-issues-cli/blob/v0.0.0/src/commands/sync/group.ts)_

## `snyk-issues sync org [FILE]`

Snyk Org {orgID} issues syncronisation

```
USAGE
  $ snyk-issues sync org [FILE] [-f] [-o <value>]

ARGUMENTS
  FILE  file to read/write Snyk issues intoto

FLAGS
  -f, --force
  -o, --orgId=<value>  Snyk OrgID for Synchronisation

DESCRIPTION
  Snyk Org {orgID} issues syncronisation

EXAMPLES
  $ snyk-issues sync org
```

_See code: [src/commands/sync/org.ts](https://github.com/udaykor/snyk-issues-cli/blob/v0.0.0/src/commands/sync/org.ts)_
<!-- commandsstop -->
