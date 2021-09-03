import React from "react";
import cn from "classnames";
import styles from "../styles/components/AgeRestrictionContent.module.scss";

const AgeRestrictionContent = () => {
  return (
	<>
		<div className={cn("h4", styles.title)}>Age Restriction</div>
		<div className={styles.container}>
			<ul>
				<li>
					<h4>All Ages</h4>
					<p>Art contains nothing in theme, language, nudity, sex, violence or other matters that, would offend parents whose younger children view the art. No nudity, sex scenes or drug use are present in the art.</p>
				</li> 

				<li>
					<h4>PG</h4>
					<p>Art should be investigated by parents before they let their younger children view. Parents may consider some material unsuitable for their children, and parents should make that decision. There may be some profanity and some depictions of violence or brief nudity. But these elements are not deemed so intense as to require that parents be strongly cautioned beyond the suggestion of parental guidance. There is no drug use content in the picture.</p>
				</li> 
			
				<li>
					<h4>PG-13</h4>
					<p>
					Art that can be deem a warning for parents to determine whether their children under age 13 should view the art, as some material might not be suited for them. The are may have violence, nudity, sensuality, language, adult activities or other elements, but does not reach the restricted R category. There may be depictions of violence in the art, but generally not both realistic and extreme or persistent violence.
					</p>
				</li> 

				<li>
					<h4>R-18 and above</h4>
					<p>
					No children will be allowed to view this art. The rating simply signals that the content is appropriate only for an adult audience of ages 18 and above. Such art can contain violence, nudity, sensuality, language, adult activities or other elements.
					</p>
				</li> 
			</ul>
		</div>
	</>
  );
};

export default AgeRestrictionContent;
