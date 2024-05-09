import {Args, Command, Flags} from '@oclif/core'
import getSnykToken from '../../lib/env.js'

export default class SyncGroup extends Command {
  static override args = {
    groupId: Args.string({description: 'Snyk Group ID for which to sync issues at group level', name: 'groupid', required: false }),
  }

  static override description = 'Snyk Group issues syncronisation'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  // To-Do: Enable verbose
  static override flags = {
    // flag with no value (-f, --force) to replace previous content
    force: Flags.boolean({char: 'f', name: '--force', description: 'Force syncronisation'})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SyncGroup);
    // To-Do: Enable verbose
    this.log(`Runnung sync for Group ID: ${args.groupId}`)
    this.log(`Token: ${getSnykToken()}`);
  }
}
