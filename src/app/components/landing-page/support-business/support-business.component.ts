import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-business',
  templateUrl: './support-business.component.html',
  styleUrls: ['./support-business.component.scss']
})
export class SupportBusinessComponent implements OnInit {
  supportBusiness: any[] = [
    {
      icon: 'fa fa-3x fa-network-wired',
      title: 'الإدارة الإلكترونية لأعمال اللجان',
      desc: ' نظام إلكتروني يهدف لتفعيل أعمال لجان الغرفة القطاعية بشكل أكثر انسيابية ومرونة،و تطوير آلية العمل في إدارة اجتماعات مجلس إدارتها ولجانها الرئيسة والفرعية وفرق العمل بها.'
    },

    {
      icon: 'fa fa-3x fa-chalkboard-teacher',
      title: 'لجان غرفة الرياض',
      desc: 'من أهم آليات الأداء التنموي لغرفة الرياض، وأحد وسائل تبني قضايا المشتركين وتطلعاتهم؛ تعمل على تشخيص المعوقات وتبني الحلول والاتصال نيابةً عن المستثمرين مع القيادات التنفيذية المختلفة'
    },
    {
      icon: 'fa fa-3x fa-globe-americas',
      title: 'مرصد قطاع دعم الأعمال',
      desc: 'تم إطلاق "بوابة مرصد قطاع دعم الاعمال" لإضفاء المزيد من الحيوية والفاعلية على إنتاجه ونشاطاته، وليصبح المركز مرجعاً رئيسياً لقطاع الأعمال بمنطقة الرياض خصوصاً والمملكة عموماً'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
