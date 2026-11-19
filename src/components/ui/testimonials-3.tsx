import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/charclyr-content";

export function Testimonials3() {
  return (
    <div className="testimonial-grid">
      {TESTIMONIAL_PLACEHOLDERS.map((testimonial, index) => (
        <article
          className="testimonial-placeholder"
          key={`${testimonial.name}-${index}`}
          aria-label={`Review placeholder ${index + 1}`}
        >
          <div>
            <span aria-hidden="true" className="testimonial-mark">
              “
            </span>
            <p className="testimonial-text">{testimonial.quote}</p>
          </div>
          <div className="testimonial-bottom">
            <span className="testimonial-tag">Customer review</span>
            <span>{testimonial.name}</span>
          </div>
        </article>
      ))}
    </div>
  );
}