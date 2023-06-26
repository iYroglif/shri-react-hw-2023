import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { TicketRemoveButton } from "../TicketRemoveButton/TicketRemoveButton";
import { TicketCounterCompound } from "../TicketCounterCompound/TicketCounterCompound";

export const Ticket = ({
  id,
  imgUrl,
  title,
  description,
  link,
  withModal,
}: {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  link: string;
  withModal?: boolean;
}) => {
  return (
    <div className={styles.root}>
      <Image src={imgUrl} alt={title} width={100} height={120} className={styles.image} />

      <div className={styles.description}>
        <Link href={link} className={styles.title}>
          {title}
        </Link>
        <span className={styles.descriptionText}>{description}</span>
      </div>

      <div>
        <TicketCounterCompound id={id}>
          {Boolean(withModal) ? (
            <TicketCounterCompound.DecrementButtonWithModal />
          ) : (
            <TicketCounterCompound.DecrementButton />
          )}
          <TicketCounterCompound.Count />
          <TicketCounterCompound.IncrementButton />
        </TicketCounterCompound>
      </div>

      {Boolean(withModal) && <TicketRemoveButton id={id} />}
    </div>
  );
};
