import {Args, Command, Flags} from '@oclif/core'

export default class SyncOrg extends Command {
  static override args = {
    file: Args.string({description: 'file to read/write Snyk issues intoto'}),
  }

  static override description = 'Snyk Org {orgID} issues syncronisation'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-o, --orgId=VALUE)
    orgId: Flags.string({char: 'o', description: 'Snyk OrgID for Synchronisation'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SyncOrg)
    // To-Do: Enable verbose
    const orgId = flags.orgId ?? 'world'
    this.log(`Running`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
