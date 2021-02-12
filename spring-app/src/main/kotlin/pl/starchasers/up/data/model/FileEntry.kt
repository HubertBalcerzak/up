package pl.starchasers.up.data.model

import pl.starchasers.up.data.value.*
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class FileEntry(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Embedded
    val key: FileKey,

    @Embedded
    val filename: Filename,

    @Embedded
    val contentType: ContentType,

    @Embedded
    val password: FilePassword?,

    @Column(nullable = false, unique = false)
    val encrypted: Boolean,

    @Column(nullable = false, unique = false)
    val createdDate: LocalDateTime,

    @Column(nullable = true, unique = false)
    val toDeleteDate: LocalDateTime?,

    @Column(nullable = false, unique = false)
    val permanent: Boolean,

    @Embedded
    val accessToken: FileAccessToken,

    @Embedded
    val size: FileSize,

    @ManyToOne(fetch = FetchType.LAZY)
    val owner: User?
)
