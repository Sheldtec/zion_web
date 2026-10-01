import { site } from '@/lib/site';

export function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap utility__inner">
        <span className="utility__location">{site.address.full}</span>
        <div className="utility__links">
          <a href={site.phone.href}>Call {site.phone.display}</a>
          <a href={site.whatsapp.href}>WhatsApp</a>
          <a href={site.portalUrl}>Parent portal</a>
        </div>
      </div>
    </div>
  );
}
