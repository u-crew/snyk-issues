import {Args, Command, Flags} from '@oclif/core'
import { initiateGroupIssuesSync } from '../../lib/groupIssuesHelper.js'
import { appendFileSync, readFile, writeFileSync } from 'fs';
import { homedir } from 'os';

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
    const resp = await initiateGroupIssuesSync();
  }
}
