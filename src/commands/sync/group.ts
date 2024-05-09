import { Args, Command, Flags } from '@oclif/core'

import initiateGroupIssuesSync from '../../lib/group-issues-helper.js'


export default class SyncGroup extends Command {
  static override args = {
    groupId: Args.string({ description: 'Snyk Group ID for which to sync issues at group level', name: 'groupid', required: false })
  }

  static override description = 'Snyk Group issues syncronisation'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  // To-Do: Enable verbose
  static override flags = {
    // flag with no value (-f, --force) to replace previous content
    force: Flags.boolean({ char: 'f', description: 'Force syncronisation', name: '--force' })
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(SyncGroup);
    // To-Do: Enable verbose
    this.log(`Runnung sync for Group ID: ${args.groupId}`)
    await initiateGroupIssuesSync();
  }
}
