import User from '../models/User';
import { ProgramArea } from '../models/enums/ProgramArea';
import { PermissionSet } from '../models/enums/PermissionSet';

export default class UserMother {
    public static clericalDataEntry(): User {
        return {
            userId: 'test-clerical',
            firstName: 'test',
            lastName: 'clerical',
            isMasterSecurityAdmin: false,
            programAreaAdministrator: false,
            programAreas: [],
            roles: [
                {
                    jurisdiction: 'All',
                    programArea: ProgramArea.STD,
                    permissionSet: PermissionSet.NEDSS_CLERICAL_DATA_ENTRY,
                    isGuest: false
                }
            ]
        };
    }

    public static supervisor(): User {
        return {
            userId: 'test-supervisor',
            firstName: 'test',
            lastName: 'supervisor',
            isMasterSecurityAdmin: false,
            programAreaAdministrator: true,
            programAreas: [ProgramArea.STD],
            roles: [
                {
                    jurisdiction: 'All',
                    programArea: ProgramArea.STD,
                    permissionSet: PermissionSet.NEDSS_DISEASE_SUPERVISOR,
                    isGuest: false
                }
            ]
        };
    }

    public static systemAdmin(): User {
        return {
            userId: 'msa',
            firstName: 'Master',
            lastName: 'Administrator',
            isMasterSecurityAdmin: true,
            programAreaAdministrator: true,
            programAreas: Object.values(ProgramArea),
            roles: []
        };
    }
}
