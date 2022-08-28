import BasePage from '../utils/BasePage';

export class PatientFilePage extends BasePage {
    constructor(patientId: string) {
        super(`/PatientSearchResults1.do?ContextAction=ViewFile&uid=${patientId}`);
    }
}
