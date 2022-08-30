import Patient from '../models/Patient';
import BasePage from '../utils/BasePage';

enum Selector {
    PATIENT_SUMMARY_TABLE = 'div[id=subsect_basicInfo] table[id=Summary_summary]',
    DELETE_BUTTON = 'input[name=delete]'
}
export class PatientFilePage extends BasePage {
    constructor(patientId: string) {
        super(`/PatientSearchResults1.do?ContextAction=ViewFile&uid=${patientId}`);
    }

    assertPatientSummaryExists(patient: Patient): void {
        const summaryTable = this.getElement(Selector.PATIENT_SUMMARY_TABLE);
        summaryTable.should('contain', patient.state);
        summaryTable.should('contain', patient.county);
        summaryTable.should('contain', patient.cellPhone);
        summaryTable.should('contain', patient.email);
        summaryTable.should('contain', patient.race.toString());
        summaryTable.should('contain', patient.ethnicitiy);
        patient.identifications.forEach((id) => {
            summaryTable.should('contain', id.identificationType.toString());
            summaryTable.should('contain', id.idNumber);
        });
    }

    clickDelete() {
        this.clickFirst(Selector.DELETE_BUTTON);
    }
}
